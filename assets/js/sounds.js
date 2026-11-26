/* ============================================================
   Job-Boy 3000 sounds — synthesized, no audio files needed
   ------------------------------------------------------------
   Drop this file into:  assets/js/sounds.js

   It makes Pip-Boy-style blips with the Web Audio API, so
   there is nothing to download and no Fallout audio to find.
   (Real Fallout sound files are copyrighted, so they are not
   included here — these are original synthesized tones.)

   It defines window.JobBoySounds with:
     .click()        — short blip, for Prev / Home / Next
     .perk()         — rising two/three-tone chime, perk picked
     .achievement()  — little fanfare arpeggio, achievement claimed
     .tick()         — very quiet tick, for the dial while scrolling
     .unlock()       — call on any click if you wire it yourself

   Browsers block sound until the user has interacted with the
   page, so this file also unlocks audio on the first
   pointerdown / keydown in the document that loaded it.
   That is why sounds.js must be loaded in BOTH the parent
   page (index.html) and the iframe pages (see patches.txt):
   the parent and the iframe each have their own document,
   and each needs its own unlock + sound object.
   ============================================================ */
(function () {
    "use strict";

    var ctx = null;
    var master = null;

    function ensureCtx() {
        if (ctx) {
            if (ctx.state === "suspended") {
                ctx.resume();
            }
            return ctx;
        }

        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) {
            return null;
        }

        ctx = new AC();
        master = ctx.createGain();
        master.gain.value = 0.45;
        master.connect(ctx.destination);
        return ctx;
    }

    function tone(freq, opts) {
        if (!ctx) {
            return;
        }
        opts = opts || {};

        var delay = opts.delay || 0;
        var duration = opts.duration || 0.07;
        var type = opts.type || "triangle";
        var volume = opts.volume || 0.18;
        var slideTo = opts.slideTo || null;

        var t0 = ctx.currentTime + delay;

        var osc = ctx.createOscillator();
        var gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, t0);
        if (slideTo) {
            osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + duration);
        }

        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.exponentialRampToValueAtTime(volume, t0 + 0.008);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

        osc.connect(gain);
        gain.connect(master);
        osc.start(t0);
        osc.stop(t0 + duration + 0.05);
    }

    var Sounds = {
        unlock: function () {
            ensureCtx();
        },

        /* Prev / Home / Next */
        click: function () {
            if (!ensureCtx()) {
                return;
            }
            tone(1500, { duration: 0.03, type: "square", volume: 0.1 });
            tone(750, {
                duration: 0.06,
                type: "triangle",
                volume: 0.16,
                delay: 0.012,
                slideTo: 500
            });
        },

        /* A perk card was picked (not re-clicking the same one) */
        perk: function () {
            if (!ensureCtx()) {
                return;
            }
            tone(660, { duration: 0.07, type: "triangle", volume: 0.2 });
            tone(990, { duration: 0.09, type: "triangle", volume: 0.2, delay: 0.07 });
            tone(1320, { duration: 0.12, type: "sine", volume: 0.14, delay: 0.14 });
        },

        /* An achievement was claimed for the first time */
        achievement: function () {
            if (!ensureCtx()) {
                return;
            }
            var notes = [523.25, 659.25, 783.99, 1046.5];
            notes.forEach(function (freq, i) {
                tone(freq, {
                    duration: i === notes.length - 1 ? 0.22 : 0.11,
                    type: "triangle",
                    volume: 0.2,
                    delay: i * 0.08
                });
            });
        },

        /* Dial tick while scrolling — kept quiet, and silent
           until audio has been unlocked by a real click, so
           scrolling before the first click makes no noise. */
        tick: function () {
            if (!ctx || ctx.state !== "running") {
                return;
            }
            tone(1900, { duration: 0.025, type: "square", volume: 0.05 });
        }
    };

    window.JobBoySounds = Sounds;

    /* Unlock on first interaction in this document. */
    document.addEventListener("pointerdown", ensureCtx, { passive: true });
    document.addEventListener("keydown", ensureCtx);
})();

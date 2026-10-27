/* Laíne Barbosa · revelação dos blocos ao rolar */

(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.rise');

  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (el) { el.classList.add('is-in'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.15 });

  Array.prototype.forEach.call(targets, function (el) { observer.observe(el); });
})();

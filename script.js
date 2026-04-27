'use strict'

// --- Alternância de Tema (Dark/Light Mode) ---
const themeToggleBtn = document.getElementById('theme-toggle');
let isLightMode = false;

themeToggleBtn.addEventListener('click', () => {
    isLightMode = !isLightMode;
    if (isLightMode) {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.innerText = '🌙';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.innerText = '☀️';
    }
});

// Botão de Contato
document.getElementById('btn-alerta').addEventListener('click', () => {
    alert('Obrigado pelo interesse! Em breve meu formulário de contato estará ativo.');
});

// Animação de entrada ao scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
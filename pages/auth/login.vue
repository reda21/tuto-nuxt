<template>
    <div>
        <LoginForm />
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div class="tester-unit a">A</div>
            <div class="tester-unit b">B</div>
            <div class="tester-unit c">C</div>
        </div>
    </div>
</template>

<style>
:root {
    --color-blue-500: #0070f3;
    --color-green-500: #22c55e;
    --color-red-500: #ef4444;
    --color-blue-700: #0369a1;
    --color-green-700: #16a34a;
    --color-red-700: #b91c1c;
}

.tester {
    display: grid;
    grid-template-columns: repeat(var(--n, 3), 1fr);
    gap: 10px;
}

@media (max-width: 800px) {
    .tester {
        --n: 2;
    }
}

@media (max-width: 400px) {
    .tester {
        --n: 1;
    }
}

@property --background-color {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
}

.tester-unit {
    --background-color: lightblue;
    background-color: var(--background-color);
    padding: 1rem;
    text-align: center;
    transition: background-color 0.5s ease-in-out;
}

.tester-unit.a {
    --background-color: var(--color-blue-500);
}

.tester-unit.a:hover {
    --background-color: var(--color-blue-700);
}

.tester-unit.b {
    --background-color: var(--color-green-500);
}

.tester-unit.b:hover {
    --background-color: var(--color-green-700);
}

.tester-unit.c {
    --background-color: var(--color-red-500);
}

.tester-unit.c:hover {
    --background-color: var(--color-red-700);
}
</style>


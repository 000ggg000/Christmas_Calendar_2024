document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('flying');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});
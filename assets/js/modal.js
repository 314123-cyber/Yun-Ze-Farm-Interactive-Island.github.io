function openModal(image) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');

    if (image === 'img1') {
        img.src = 'assets/images/英文版.jpg';
    } else if (image === 'img2') {
        img.src = 'assets/images/日文版.jpg';
    }
    else if (image === 'img3') {
        img.src = 'assets/images/回饋.jpg';
    }

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('image-modal').classList.remove('active');
}

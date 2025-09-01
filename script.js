
function likeProduct(id) {
    const countSpan = document.getElementById(`like-count-${id}`);
    let count = parseInt(countSpan.textContent);
    countSpan.textContent = count + 1;
}

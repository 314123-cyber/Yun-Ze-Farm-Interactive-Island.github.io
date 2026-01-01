// 網頁載入自動顯示彈窗
window.onload = function() {
    document.getElementById("popup").classList.add("active");
};

// 點「關閉」按鈕
document.getElementById("closePopup").onclick = function() {
    document.getElementById("popup").classList.remove("active");
};

// 點背景遮罩也可關閉
document.getElementById("popup").onclick = function(e) {
    if (e.target === this) {
        this.classList.remove("active");
    }
};

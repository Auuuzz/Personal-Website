// 實作導覽列的平滑滾動效果
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // 取得目標區塊
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // 計算滾動位置 (扣除固定 header 的高度)
        const headerHeight = document.getElementById('navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        // 平滑滾動
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
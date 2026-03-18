// 移动端导航菜单切换
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// 联系表单提交处理
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // 阻止默认提交行为
        
        // 获取表单数据
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // 简单验证（前端）
        if (!name || !email || !message) {
            alert('请填写所有必填项！');
            return;
        }

        // 模拟提交成功
        alert(`感谢 ${name}！你的消息已发送，我们会尽快回复你。`);
        contactForm.reset(); // 重置表单
    });
}

// 平滑滚动（可选）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 选择所有带有 'timeline-item' 类的元素
const timelineItems = document.querySelectorAll('.timeline-item');

// 遍历每个元素并为其添加动画
timelineItems.forEach(item => {
    // 使用 gsap.to() 或 gsap.from() 来定义动画
    gsap.to(item, {
        // 动画结束状态（从初始状态透明度0、X轴-50px，动画到透明度1、X轴0）
        opacity: 1,
        x: 0, 
        duration: 0.8, // 动画持续时间
        ease: "power2.out", // 缓动效果
        
        // ScrollTrigger 配置
        scrollTrigger: {
            trigger: item, // 触发动画的元素
            start: "top 90%", // 当元素的顶部进入视口 90% 的位置时触发
            end: "bottom 20%",
            toggleActions: "play none none none", // 滚动经过时只播放一次
            // markers: true, // 调试时可以打开标记
        }
    });
});
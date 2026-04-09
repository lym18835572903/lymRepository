
document.addEventListener('DOMContentLoaded', function () {
    const measureBtn = document.getElementById('measureBtn');

    measureBtn.addEventListener('click', function () {
        const now = new Date();
        const formattedTime = now.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });

        alert(`提醒：请在安静状态下测量血压。\n建议时间：${formattedTime}\n\n记录数值后，可保存至手机备忘录或血压记录APP。`);
    });
});

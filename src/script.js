// 等待整个文档内容加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取按钮和消息显示区域的DOM元素
    const button = document.getElementById('myButton');
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    document.getElementById('app').appendChild(messageDiv);

    // 按钮点击事件监听器
    button.addEventListener('click', () => {
        // 在按钮被点击时，显示消息
        showMessage('Button was clicked!');

        // 禁用按钮3秒
        button.disabled = true;
        setTimeout(() => {
            button.disabled = false;
        }, 3000);
    });

    // 显示消息的函数
    function showMessage(message) {
        // 设置消息内容并应用样式
        messageDiv.textContent = message;
        messageDiv.style.padding = '10px';
        messageDiv.style.marginTop = '10px';
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '1px solid #c3e6cb';
        messageDiv.style.borderRadius = '5px';

        // 3秒后隐藏消息
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 3000);
    }
});
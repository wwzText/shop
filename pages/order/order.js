export default {
    // 复制功能
    copyText(text) {
        uni.setClipboardData({
            data: text,
            success: function () {
                uni.hideLoading();
                uni.showToast({
                    title: '复制成功',
                    icon: 'none',
                })
            }
        });
    }
}
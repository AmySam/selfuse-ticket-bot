async function sendFeiShuMsg(webhookUrl, msg) {
    if (!webhookUrl) {
        console.log("WEBHOOK_URL未设置");
        return;
    }

    const payload = {
        msg_type: 'text',
        content: {
            text: msg,
        },
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        const result = await response.json();
        console.log('飞书结果:', result);
        return result;
    } catch (error) {
        console.error('飞书错误:', error);
        return {
            code: -1,
            msg: error.message || String(error),
        };
    }
}

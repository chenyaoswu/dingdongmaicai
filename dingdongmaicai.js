const appName = "叮咚买菜";
launchApp(appName);
sleep(1000);
auto.waitFor() //检查无障碍服务是否已经启用，如果没有启用则抛出异常并跳转到无障碍服务启用界面；
toast('打开叮咚买菜')

const start = () => {
    try {
        toast('开始了')

        if (textStartsWith('去结算').exists()){
            toast('去结算')
            click(600, 1100);
            sleep(1000)
            start()
        }else if (textStartsWith('购物车').exists()){
            toast('开始进入购物车')
            click(500, 1200);
            sleep(1000)
            start()
        } else if (textStartsWith('立即支付').exists()) {
            toast('准备支付')
            click(500, 1220);
            sleep(1000)
            start()
        } else if (textStartsWith('今日已打烊').exists()) {
            toast('准备支付')
            // click(500, 1220);
            id("iv_dialog_select_time_close").findOne().click()
            sleep(1000)
            start()
        }else if(textStartsWith('今天').exists() || textStartsWith('明天').exists()) {
            toast('选择时间');
            click(300, 650)
            sleep(1000)
            start()
        } else if (textStartsWith("先选择商品后再结算").exists()) {
            toast('没有商品');
            // sleep(1000)
            // start()

        } else {
            toast('等待操作')
            sleep(1000)
            start()
        }

    } catch (error) {
        toast(error)
        sleep(1000)
        start()
    }
    
}
start()

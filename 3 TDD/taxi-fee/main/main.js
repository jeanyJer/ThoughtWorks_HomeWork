function taxiFee(distance,waiting) {
    //2公里以内6元
    let result = 6;

    //等待时间价格
    if(waiting>0){
        result += waiting * 0.25;
    }

    //距离大于2公里时
    if(distance > 2){
        // 距离大于2公里小于8公里时
        if(distance <= 8){
            result += (distance - 2) * 0.8;
        } else {
            //距离大于8公里时
            result += (8 - 2) * 0.8 + (distance - 8) * 0.8 * 1.5;
        }
    }

    //四舍五入返回价格
    return Math.round(result);

}

module.exports = taxiFee;
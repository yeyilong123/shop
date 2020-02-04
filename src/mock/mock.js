import Mock from 'mockjs'
import url from '@/service.config.js'

let Random = Mock.Random;

let hotProducts = () => {
    let hotProductsList = []
    for(let i=0; i<10; i++){
        let hotProduct = {
            title: Random.cparagraph(5,20),
            img_url: Random.image('300x500'),
            m_price: Random.integer(1,200),
            attr: {
                作者: Random.cname()
            }
        }
        hotProductsList.push(hotProduct)
    }
    return hotProductsList
}
Mock.mock(url.getHotProducts, hotProducts)

let varietyItem = () => {
    let varietyItemList = []
    for(let i=0; i<50; i++){
        let varietyItem = {
            title: Random.cparagraph(5,20),
            img_url: Random.image('300x500'),
            m_price: Random.integer(1,200),
            attr: {
                作者: Random.cname()
            }
        }
        varietyItemList.push(varietyItem)
    }
    return varietyItemList
}
Mock.mock(url.getVarietyItem, varietyItem)
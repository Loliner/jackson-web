import React from 'react';

export default function TodayRecommend() {
    const articles = [{
        title: '如何与猫狗互动？——教你正确与宠物玩耍',
        description: '猫和狗的互动方式不同，但都需要宠物主人有一定的了解，充分了解自己的宠物后，我们可以想出很多方法跟宠物玩游戏，这里会提供一些互动的方法和建议。',
        tag: '教育',
        anchor: '八方',
        time: '2023/05/09',
        link: '',
        image: 'images/blog/img-2.jpg',
        avatar: 'images/blog/blog-avater/img-2.jpg',
    }, {
        title: 'WOW！狗狗的天生英气姿态——如何让你的狗狗英姿飒爽地摆拍',
        description: '狗狗尤其是一些最帅气的品种，在拍照时走姿情景很能提高照片的质量，这篇博客会提供一些小窍门和训练技巧，摆出宝贝最酷的姿态。',
        tag: '教育',
        anchor: '八方',
        time: '2023/05/09',
        link: '',
        image: 'images/blog/img-2.jpg',
        avatar: 'images/blog/blog-avater/img-2.jpg',
    }, {
        title: '猫咪贪食怎么办？——如何解决猫咪因贪食引起的问题',
        description: '猫咪的贪食症不仅会引起猫咪肥胖，还可能产生营养不良和消化问题，这篇博客会提供如何预防和解决猫咪贪食症的建议。',
        tag: '食品',
        anchor: '白卿',
        time: '2023/05/09',
        link: '',
        image: 'images/blog/img-2.jpg',
        avatar: 'images/blog/blog-avater/img-3.jpg',
    }, {
        title: '你真的会照顾的你狗狗吗？——谈谈宠物的健康管理',
        description: '狗在不同的年龄阶段有不同的照顾需求，比如老年狗需要更多的关注和护理，怎么判别宠物的不同阶段和提供宠物专属的保健方案，这篇博客给您一些启示。',
        tag: '健康',
        anchor: '阿祥',
        time: '2023/05/09',
        link: '',
        image: 'images/blog/img-2.jpg',
        avatar: 'images/blog/blog-avater/img-1.jpg',
    }, {
        title: '清洗宠物家具你必须知道这些事——如何让宠物家具保持干净清洁',
        description: '宠物的家具清洁是宠物日常生活和健康的重要一环，这篇博客会提供清洁宠物家具和如何避免细菌滋生的简单方法。',
        tag: '用品',
        anchor: '阿祥',
        time: '2023/05/09',
        link: '',
        image: 'images/blog/img-2.jpg',
        avatar: 'images/blog/blog-avater/img-1.jpg',
    }, {
        title: '猫咪一到新环境就非常警惕？——帮助猫咪适应不同场合和环境',
        description: '面对不同场合的社交行为和行动，猫狗有时可能会需要一些指导和引领，这篇博客会在从如何培养社交能力并且提高社交性能力的方面做出解答。',
        tag: '教育',
        anchor: '八方',
        time: '2023/05/09',
        link: '',
        image: 'images/blog/img-2.jpg',
        avatar: 'images/blog/blog-avater/img-2.jpg',
    }];


    return (
        <div className="col col-lg-8 col-12">
            <div className="wpo-blog-highlights-wrap">
                <div className="wpo-blog-items">
                    <div className="row">
                        {articles.map(({ title, description, tag, anchor, time, link, image, avatar }) => (
                            <div className="col col-lg-6 col-md-6 col-12">
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img loading="lazy" src={image} alt="" />
                                        <div className="thumb">{tag}</div>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <h2><a href="blog-single.html">{title}</a></h2>
                                        <ul>
                                            <li><img loading="lazy" src={avatar} alt="" />
                                            </li>
                                            <li>By <a href="blog-single.html">{anchor}</a></li>
                                            <li>{time}</li>
                                        </ul>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
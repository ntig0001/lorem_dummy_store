const products = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1610041321327-b794c052db27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Arctics 5 Gaming Headphones',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 20.01,
        amount: 1
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Neumann U67 Mic',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 45.65,
        amount: 1
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
        title: 'Smart Apple Watch',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 41.02,
        amount: 1
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        title: 'iPadOS 16 Tablet PC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 30.78,
        amount: 1
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Apple iPad Pro Tablet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 65.31,
        amount: 1
    },
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/I/61HGvrbamzL._AC_SX342_.jpg',
        title: 'Apple TV 4K (2022)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 35.00,
        amount: 1
    },
    {
        id: 7,
        image: 'https://m.media-amazon.com/images/I/7105BA4AaoL._AC_SX355_.jpg',
        title: 'Samsung Curved Monitor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 84.00,
        amount: 1
    },
    {
        id: 8,
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361',
        title: 'Apple AirPods Pro(2nd Gen)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 50.00,
        amount: 1
    },
    {
        id: 9,
        image: 'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/precision/precision-5560/media-gallery/workstations_precision_15_5560_gallery_3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=632&qlt=100,1&resMode=sharp2&size=632,402&chrss=full',
        title: 'DELL Precision 5560',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 99.99,
        amount: 1
    },
    {
        id: 10,
        image: 'https://i5.walmartimages.com/asr/e52557b8-b547-4a5c-a39c-debf9feb5470.1b85a1581c79048db539c6d6b666d8b7.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
        title: 'Canon EOS 250D',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 51.99,
        amount: 1
    },
    {
        id: 11,
        image: 'https://m.media-amazon.com/images/I/71Ni33LIM8L._AC_SY355_.jpg',
        title: 'KOORUI QHD Curved Monitor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 49.99,
        amount: 1
    },
    {
        id: 12,
        image: 'https://m.media-amazon.com/images/I/712H7eI9Y6L.__AC_SX300_SY300_QL70_ML2_.jpg',
        title: 'Google PIXEL 7 pro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 156.81,
        amount: 1
    },
    {
        id: 13,
        image: 'https://d3e54emdgoy1fq.cloudfront.net/uploads/product/image/430168/medium_plus_7d5b8-PrimeCables-PC-DP-212-USB-Lamp-15W-Dimmable-Eye-Caring-LED-Desk-Lamp-with-Clamp-Remote-Touch-Control-PrimeCables-.jpg',
        title: 'LED Desk Lamp with Clamp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 50.54,
        amount: 1
    },
    {
        id: 14,
        image: 'https://images.samsung.com/is/image/samsung/p6pim/ca/2208/gallery/ca-galaxy-z-flip4-f721-sm-f721wlvaxac-533046332',
        title: 'Samsung Galaxy Z Flip4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 65.31,
        amount: 1
    },
    {
        id: 15,
        image: 'https://m.media-amazon.com/images/I/71Bl+JlWzJL._AC_SY355_.jpg',
        title: 'Camera Tripod Stand with Bag',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a vulputate lacus.',
        price: 21.99,
        amount: 1
    }
]

export default products;
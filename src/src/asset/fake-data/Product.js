const Products = [
    {
        title: 'Thùng Cà Phê Sữa Espresso', 
        path_name: 'thung-ca-phe-sua-espreso',
        cost: '336.000 đ', 
        img: require('../../images/house/sp1.jpg'), 
        catalog: 'Cà phê tại nhà', 
        catalogParent: 'Tại nhà', 
        nameCatalog: 'Cà Phê Tại Nhà'
    }, 
    {
        title: 'Combo 6 Lon Cà Phê Sữa Espresso', 
        path_name: 'combo-6-lon',
        cost: '84.000 đ', 
        img: require('../../images/house/sp2.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Cà Phê Rang Xay Original 1 Túi 1KG',
        path_name: 'ca-phe-rang-xay', 
        cost: '235.000 đ', 
        img: require('../../images/house/sp3.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Cà Phê Hòa Tan Đậm Vị Việt Túi 40x16G',
        path_name: 'ca-phe-hoa-tan', 
        cost: '99.000 đ', 
        img: require('../../images/house/sp4.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Cà Phê Rang Xay Original 1 250g', 
        path_name: 'ca-phe-rang-xay',
        cost: '60.000 đ', 
        image01: require('../../images/house/sp5.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Thùng Cà Phê Sữa Espresso', 
        path_name: 'thung-ca-phe-sua',
        cost: '336.000 đ', 
        img: require('../../images/house/sp1.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Cà Phê Sữa Đá Hòa Tan (10 gói x 22g)', 
        path_name: 'ca-phe-sua-da-hoa-tan',
        cost: '44.000 đ', 
        img: require('../../images/house/sp6.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Cà Phê Hoà Tan Đậm Vị Việt (18 gói x 16 gam)', 
        path_name: 'ca-phe-hoa-tan-dam-vi-viet-tri',
        cost: '48.000 đ', 
        img: require('../../images/house/sp7.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Cà Phê Sữa Đá Hòa Tan Túi 25x22G', 
        path_name: 'ca-phe-sua-da-hoa-tan-tui',
        cost: '99.000 đ', 
        img: require('../../images/house/sp8.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Cà Phê Sữa Đá Pack 6 Lon', 
        path_name: 'ca-phe-sua-da-pack-6-lon',
        cost: '84.000 đ', 
        img: require('../../images/house/sp9.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Thùng 24 Lon Cà Phê Sữa Đá', 
        path_name: 'thung-24-lon-ca-phe-sua-da',
        cost: '336.000 đ', 
        img: require('../../images/house/sp10.jpg'),
        catalog: 'Cà phê tại nhà',
        catalogParent: 'Tại nhà'
    }, 
    {
        title: 'Cà Phê Sữa Đá', 
        path_name: 'Cà-Phê-Sữa-Đá',
        cost: '29.000 đ', 
        img: require('../../images/coffee/sp1.jpg'),
        catalog: 'Cà Phê Việt Nam',
        catalogParent: 'Cà Phê', 
        nameCatalog: 'Cà Phê Việt Nam'
    },
    {
        title: 'Cà Phê Sữa Nóng', 
        path_name: "Cà-Phê-Sữa-Nóng",
        cost: '35.000 đ', 
        img: require('../../images/coffee/sp2.jpg'),
        catalog: 'Cà Phê Việt Nam',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Bạc Sỉu', 
        path_name: "Bạc-Sỉu",
        cost: '29.000 đ', 
        img: require('../../images/coffee/sp3.jpg'),
        catalog: 'Cà Phê Việt Nam',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Bạc Sỉu Nóng', 
        path_name: "Bạc-Sỉu-Nóng",
        cost: '35.000 đ', 
        img: require('../../images/coffee/sp4.jpg'),
        catalog: 'Cà Phê Việt Nam',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Cà Phê Đen Đá', 
        path_name: "Cà-Phê-Đen-Đá",
        cost: '29.000 đ', 
        img: require('../../images/coffee/sp5.jpg'),
        catalog: 'Cà Phê Việt Nam',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Cà Phê Đen Nóng', 
        path_name: "Cà-Phê-Đen-Nóng",
        cost: '35.000 đ', 
        img: require('../../images/coffee/sp6.jpg'),
        catalog: 'Cà Phê Việt Nam',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Cà Phê Sữa Đá Chai Fresh 250ML', 
        path_name: "Cà-Phê-Sữa-Đá-Chai-Fresh-250ML",
        cost: '75.000 đ', 
        img: require('../../images/coffee/sp7.jpg'),
        catalog: 'Cà Phê Việt Nam',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Caramel Macchiato Đá', 
        path_name: 'Caramel_Macchiato_Đá', 
        cost: '49.000 đ', 
        img: require('../../images/coffee/sp8.jpg'),
        catalog: 'Cà Phê Máy',
        catalogParent: 'Cà Phê', 
        nameCatalog: 'Cà Phê Máy'
    },
    {
        title: 'Caramel Macchiato Nóng', 
        path_name: 'Caramel_Macchiato_Nóng', 
        cost: '49.000 đ', 
        img: require('../../images/coffee/sp9.jpg'),
        catalog: 'Cà Phê Máy',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Latte Đá', 
        path_name: 'Latte_Đá', 
        cost: '49.000 đ', 
        img: require('../../images/coffee/sp10.jpg'),
        catalog: 'Cà Phê Máy',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Latte Nóng', 
        path_name: 'Latte_Nóng', 
        cost: '49.000 đ', 
        img: require('../../images/coffee/sp11.jpg'),
        catalog: 'Cà Phê Máy',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Americano Đá', 
        path_name: 'Americano_Đá', 
        cost: '39.000 đ', 
        img: require('../../images/coffee/sp12.jpg'),
        catalog: 'Cà Phê Máy',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Americano Nóng', 
        path_name: 'Americano_Nóng', 
        cost: '39.000 đ', 
        img: require('../../images/coffee/sp13.jpg'),
        catalog: 'Cà Phê Máy',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Cappuccino Đá', 
        path_name: 'Cappuccino_Đá', 
        cost: '49.000 đ', 
        img: require('../../images/coffee/sp14.jpg'),
        catalog: 'Cà Phê Máy',
        catalogParent: 'Cà Phê'
    },
    {
        title: 'Cappuccino Nóng', 
        path_name: 'Cappuccino_Nóng', 
        cost: '49.000 đ', 
        img: require('../../images/coffee/sp15.jpg'),
        catalog: 'Cà Phê Máy',
       catalogParent: 'Cà Phê'
    },
    {
        title: 'Espresso Đá',
        path_name: 'Espresso_Đá',
        cost: '45.000 đ', 
        img: require('../../images/coffee/sp16.jpg'),
        catalog: 'Cà Phê Máy',
       catalogParent: 'Cà Phê'
    },
    {
        title: 'Espresso Nóng', 
        path_name: 'Espresso_Nóng', 
        cost: '39.000 đ', 
        img: require('../../images/coffee/sp17.jpg'),
        catalog: 'Cà Phê Máy',
       catalogParent: 'Cà Phê'
    },
    {
        title: 'Cold Brew Sữa Tươi', 
        path_name: 'Cold_Brew_Sữa_Tươi', 
        cost: '45.000 đ', 
        img: require('../../images/coffee/sp18.jpg'),
        catalog: 'Cold Brew',
       catalogParent: 'Cà Phê', 
       nameCatalog: 'Cold Brew'
    },
    {
        title: 'Cold Brew Truyền Thống', 
        path_name: 'Cold_Brew_Truyền_Thống', 
        cost: '45.000 đ', 
        img: require('../../images/coffee/sp19.jpg'),
        catalog: 'Cold Brew',
       catalogParent: 'Cà Phê'
    },
    {
        title: 'Trà Oolong Túi Lọc Tearoma 20x2G', 
        path_name: 'Trà_Oolong_Túi_Lọc_Tearoma_20x2G', 
        cost: '28.000 đ', 
        img: require('../../images/house/sp11.jpg'), 
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà', 
        nameCatalog: 'Trà Tại Nhà'
    }, 
    {
        title: 'Trà Lài Túi Lọc Tearoma 20x2G', 
        path_name: 'Trà_Lài_Túi_Lọc_Tearoma_20x2G',
        cost: '28.000 đ', 
        img: require('../../images/house/sp12.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Trà Sen Túi Lọc Tearoma 20x2G', 
        path_name: 'Trà_Sen_Túi_Lọc_Tearoma_20x2G', 
        cost: '28.000 đ', 
        img: require('../../images/house/sp13.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Trà Đào Túi Lọc Tearoma 20x2G', 
        path_name: 'Trà_Đào_Túi_Lọc_Tearoma_20x2G', 
        cost: '28.000 đ', 
        img: require('../../images/house/sp14.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Trà Oolong Lá Tearoma 100G', 
        path_name: 'Trà_Oolong_Lá_Tearoma_100G', 
        cost: '100.000 đ', 
        img: require('../../images/house/sp15.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Trà Xanh Lá Tearoma 100G', 
        path_name: 'Trà_Xanh_Lá_Tearoma_100G', 
        cost: '75.000 đ', 
        img: require('../../images/house/sp16.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Cà Phê Sữa Đá Hòa Tan (10 gói x 22g)', 
        path_name: 'Cà_Phê_Sữa_Đá_Hòa_Tan_(10 gói x 22g)', 
        cost: '44.000 đ', 
        img: require('../../images/house/sp6.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Trà Lài Lá Tearoma 100G', 
        path_name: 'Trà_Lài_Lá_Tearoma_100G', 
        cost: '80.000 đ', 
        img: require('../../images/house/sp17.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Trà Sen Lá Tearoma 100G', 
        path_name: 'Trà_Sen_Lá_Tearoma_100G', 
        cost: '80.000 đ', 
        img: require('../../images/house/sp18.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Giftset Trà Tearoma', 
        path_name: 'Giftset_Trà_Tearoma', 
        cost: '166.000 đ', 
        img: require('../../images/house/sp19.jpg'),
        catalog:'Trà Tại Nhà',
        catalogParent:'Tại nhà'
    }, 
    {
        title: 'Trà Long Nhãn Hạt Sen', 
        path_name: 'Trà-Long-Nhãn-Hạt-Sen', 
        cost: '49.000 đ', 
        img: require('../../images/tra/sp1.jpg'), 
        catalog: 'Trà trái cây',
        catalogParent: 'Trà', 
        nameCatalog: 'Trà Trái Cây'
    }, 
    {
        title: 'Trà Đào Cam Sả - Đá', 
        path_name: 'Trà-Đào-Cam-Sả-Đá', 
        cost: '49.000 đ', 
        img: require('../../images/tra/sp2.jpg'),
        catalog: 'Trà trái cây',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Đào Cam Sả - Nóng', 
        path_name: 'Trà-Đào-Cam-Sả-Nóng', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp3.jpg'),
        catalog: 'Trà trái cây',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Hạt Sen - Đá', 
        path_name: 'Trà-Hạt-Sen-Đá', 
        cost: '49.000 đ', 
        img: require('../../images/tra/sp4.jpg'),
        catalog: 'Trà trái cây',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Hạt Sen - Nóng', 
        path_name: 'Trà-Hạt-Sen-Nóng', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp5.jpg'),
        catalog: 'Trà trái cây',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Long Nhãn Hạt Chia', 
        path_name: 'Trà-Long-Nhãn-Hạt-Chia', 
        cost: '49.000 đ', 
        img: require('../../images/tra/sp6.jpg'),
        catalog: 'Trà trái cây',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Long Nhãn Hạt Chia (Nóng)á', 
        path_name: 'Trà-Long-Nhãn-Hạt-Chia-(Nóng)á', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp7.jpg'),
        catalog: 'Trà trái cây',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Đào Cam Sả Chai Fresh 500ML', 
        path_name: 'Trà-Đào-Cam-Sả-Chai-Fresh-500ML', 
        cost: '105.000 đ', 
        img: require('../../images/tra/sp8.jpg'),
        catalog: 'Trà trái cây',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Đen Macchiato', 
        path_name: 'Trà-Đen-Macchiato', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp9.jpg'),
        catalog: 'Trà sữa Macchiato' ,
        catalogParent: 'Trà', 
        nameCatalog: 'Trà sữa Macchiato'
    }, 
    {
        title: 'Hồng Trà Sữa Trân Châu', 
        path_name: 'Hồng-Trà-Sữa-Trân-Châu', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp10.jpg') ,
        catalog: 'Trà sữa Macchiato',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Hồng Trà Sữa Nóng', 
        path_name: 'Hồng-Trà-Sữa-Nóng', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp11.jpg'), 
        catalog: 'Trà sữa Macchiato',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà sữa Oolong Nướng Trân Châu', 
        path_name: 'Trà-sữa-Oolong-Nướng-Trân-Châu', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp12.jpg'),
        catalog: 'Trà sữa Macchiato',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà sữa Oolong Nướng (Nóng)', 
        path_name: 'Trà-sữa-Oolong-Nướng-(Nóng)', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp13.jpg'),
        catalog: 'Trà sữa Macchiato',
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Sữa Mắc Ca Trân Châu', 
        path_name: 'Trà-Sữa-Mắc-Ca-Trân-Châu', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp14.jpg'),
        catalog: 'Trà sữa Macchiato' ,
        catalogParent: 'Trà'
    }, 
    {
        title: 'Hồng Trà Latte Macchiato', 
        path_name: 'Hồng-Trà-Latte-Macchiato', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp15.jpg'),
        catalog: 'Trà sữa Macchiato' ,
        catalogParent: 'Trà'
    }, 
    {
        title: 'Trà Sữa Oolong Nướng Trân Châu Chai Fresh 500ML', 
        path_name: 'Trà-Sữa-Oolong-Nướng-Trân-Châu-Chai-Fresh-500ML', 
        cost: '55.000 đ', 
        img: require('../../images/tra/sp16.jpg'),
        catalog: 'Trà sữa Macchiato' ,
        catalogParent: 'Trà'
    }, 
    {
        title: 'CloudFee Creamy Hạnh Nhân Nướng', 
        path_name: 'CloudFee-Creamy-Hạnh-Nhân-Nướng', 
        cost: '39.000 đ', 
        img: require('../../images/cloudfee/sp1.jpg'),
        catalog: 'Creamy',
        catalogParent: 'CloudFee', 
        nameCatalog: 'Creamy'
    },
    {
        title: 'CloudFee Creamy Caramel', 
        path_name: 'CloudFee-Creamy-Caramel', 
        cost: '39.000 đ', 
        img: require('../../images/cloudfee/sp2.jpg'),
        catalog: 'Creamy',
        catalogParent: 'CloudFee'
    },
    {
        title: 'CloudFee Creamy Pandan Coconut', 
        path_name: 'CloudFee-Creamy-Pandan-Coconut', 
        cost: '39.000 đ', 
        img: require('../../images/cloudfee/sp3.jpg'),
        catalog: 'Creamy',
        catalogParent: 'CloudFee'
    },
    {
        title: 'CloudFee Creme Brulee Hạnh Nhân Nướng', 
        path_name: 'CloudFee-Creme-Brulee-Hạnh-Nhân-Nướng', 
        cost: '49.000 đ', 
        img: require('../../images/cloudfee/sp4.jpg'),
        catalog: 'Creme Brulee',
        catalogParent: 'CloudFee', 
        nameCatalog: 'Creme Brulle'
    },
    {
        title: 'CloudFee Creme Brulee Caramel', 
        path_name: 'CloudFee-Creme-Brulee-Caramel', 
        cost: '49.000 đ', 
        img: require('../../images/cloudfee/sp5.jpg'), 
        catalog: 'Creme Brulee',
        catalogParent: 'CloudFee'
    },
    {
        title: 'CloudFee Creme Brulee Ovaltine', 
        path_name : 'CloudFee-Creme-Brulee-Ovaltine', 
        cost : '49.000 đ', 
        img: require('../../images/cloudfee/sp6.jpg'),
        catalog: 'Creme Brulee',
        catalogParent: 'CloudFee'
    },
    {
        title: 'CloudFee Sữa Đá Sài Gòn', 
        path_name: 'CloudFee-Sữa-Đá-Sài-Gòn', 
        cost: '45.000 đ', 
        img: require('../../images/cloudfee/sp7.jpg'),
        catalog: 'Đoàn viên',
        catalogParent: 'CloudFee', 
        nameCatalog: 'Đoàn viên'
    },
    {
        title: 'CloudFee Muối Đà Nẵng', 
        path_name: 'CloudFee-Muối-Đà-Nẵng', 
        cost: '45.000 đ', 
        img: require('../../images/cloudfee/sp8.jpg'),
        catalog: 'Đoàn viên',
        catalogParent: 'CloudFee'
    },
    {
        title: 'CloudFee Trứng Hà Nội', 
        path_name: 'CloudFee-Trứng-Hà-Nội', 
        cost: '45.000 đ', 
        img: require('../../images/cloudfee/sp10.jpg'),
        catalog: 'Đoàn viên',
        catalogParent: 'CloudFee'
    },
    {
        title: 'Hi-Tea Xoài Aloe Vera', 
        path_name: 'Hi-Tea-Xoài-Aloe-Vera', 
        cost: '49.000 đ', 
        img: require('../../images/hitea/sp1.jpg'),
        catalog: 'Hi-Tea Trà',
        catalogParent: 'Hi-Tea Healthy', 
        nameCatalog: 'Hi-Tea Trà'
    },
    {
        title: 'Hi-Tea Dâu Tây Mận Muối Aloe Vera', 
        path_name: 'Hi-Tea-Dâu-Tây-Mận-Muối-Aloe-Vera', 
        cost: '49.000 đ', 
        img: require('../../images/hitea/sp2.jpg'),
        catalog: 'Hi-Tea Trà',
        catalogParent: 'Hi-Tea Healthy'
    },
    {
        title: 'HI-TEA Yuzu Trân Châu', 
        path_name: 'HI-TEA-Yuzu-Trân-Châu', 
        cost: '49.000 đ', 
        img: require('../../images/hitea/sp3.jpg'),
        catalog: 'Hi-Tea Trà',
        catalogParent: 'Hi-Tea Healthy'
    },
    {
        title: 'Hi-Tea Vải', 
        path_name: 'Hi-Tea-Vải', 
        cost: '49.000 đ', 
        img: require('../../images/hitea/sp4.jpg'),
        catalog: 'Hi-Tea Trà',
        catalogParent: 'Hi-Tea Healthy'
    },
    {
        title: 'Hi-Tea Đào', 
        path_name: 'Hi-Tea-Đào', 
        cost: '49.000 đ', 
        img: require('../../images/hitea/sp5.jpg'),
        catalog: 'Hi-Tea Trà',
        catalogParent: 'Hi-Tea Healthy', 
        nameCatalog: 'Hi-Tea Đào'
    },
    {
        title: 'Hi-Tea Đá Tuyết Xoài Đào', 
        path_name: 'Hi-Tea-Đá-Tuyết-Xoài-Đào', 
        cost: '55.000 đ', 
        img: require('../../images/hitea/sp6.jpg'),
        catalog: 'Hi-Tea đá tuyết',
        catalogParent: 'Hi-Tea Healthy'
    },
    {
        title: 'Hi-Tea Đá Tuyết Yuzu Vải', 
        path_name: 'Hi-Tea-Đá-Tuyết-Yuzu-Vải', 
        cost: '55.000 đ', 
        img: require('../../images/hitea/sp7.jpg'),
        catalog: 'Hi-Tea đá tuyết',
        catalogParent: 'Hi-Tea Healthy', 
        nameCatalog: 'Hi-Tea đá tuyết'
    },
    {
        title: 'Hi-Tea Phúc Bồn Tử Bling Bling', 
        path_name: 'Hi-Tea-Phúc-Bồn-Tử-Bling-Bling', 
        cost: '65.000 đ', 
        img: require('../../images/hitea/sp8.jpg'),
        catalog: 'Hi-Tea Bling Bling',
        catalogParent: 'Hi-Tea Healthy', 
        nameCatalog: 'Hi-Tea Bling Bling'
    }, 
    {
        title: 'Bánh Mì Gậy Gà Kim Quất', 
        path_name: 'Bánh-Mì-Gậy-Gà-Kim-Quất', 
        cost: '25.000 đ', 
        img: require('../../images/banh/sp1.jpg'), 
        catalog: 'Bánh mặn',
        catalogParent: 'Bánh & Snack', 
        nameCatalog: 'Bánh mặn'
    },
    {
        title: 'Bánh Mì Gậy Cá Ngừ Mayo', 
        path_name: 'Bánh-Mì-Gậy-Cá-Ngừ-Mayo', 
        cost: '25.000 đ', 
        img: require('../../images/banh/sp2.jpg'),
        catalog: 'Bánh mặn',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Bánh Mì Que Pate', 
        path_name: 'Bánh-Mì-Que-Pate', 
        cost: '15.000 đ', 
        img: require('../../images/banh/sp3.jpg'),
        catalog: 'Bánh mặn',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Bánh Mì Que Pate Cay', 
        path_name: 'Bánh-Mì-Que-Pate-Cay', 
        cost: '15.000 đ', 
        img: require('../../images/banh/sp4.jpg'),
        catalog: 'Bánh mặn',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Bánh Mì VN Thịt Nguội', 
        path_name: 'Bánh-Mì-VN-Thịt-Nguội', 
        cost: '35.000 đ', 
        img: require('../../images/banh/sp5.jpg'),
        catalog: 'Bánh mặn',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Croissant trứng muối', 
        path_name: 'Croissant-trứng-muối', 
        cost: '35.000 đ', 
        img: require('../../images/banh/sp6.jpg'),
        catalog: 'Bánh mặn',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Chà Bông Phô Mai', 
        path_name: 'Chà-Bông-Phô-Mai', 
        cost: '35.000 đ', 
        img: require('../../images/banh/sp7.jpg'),
        catalog: 'Bánh mặn',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mochi Kem Phúc Bồn Tử', 
        path_name: 'Mochi-Kem-Phúc-Bồn-Tử', 
        cost: '19.000 đ', 
        img: require('../../images/banh/sp8.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack', 
        nameCatalog: 'Bánh Ngọt'
    },
    {
        title: 'Mochi Kem Việt Quất', 
        path_name: 'Mochi-Kem-Việt-Quất', 
        cost: '19.000 đ', 
        img: require('../../images/banh/sp9.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mochi Kem Dừa Dứa', 
        path_name: 'Mochi-Kem-Dừa-Dứa', 
        cost: '19.000 đ', 
        img: require('../../images/banh/sp10.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mochi Kem Chocolate', 
        path_name: 'Mochi-Kem-Chocolate', 
        cost: '19.000 đ', 
        img: require('../../images/banh/s11.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mochi Kem Matcha', 
        path_name: 'Mochi-Kem-Matcha', 
        cost: '19.000 đ', 
        img: require('../../images/banh/s12.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mochi Kem Xoài', 
        path_name: 'Mochi-Kem-Xoài', 
        cost: '19.000 đ', 
        img: require('../../images/banh/s13.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mousse Red Velvet', 
        path_name: 'Mousse-Red-Velvet', 
        cost: '35.000 đ', 
        img: require('../../images/banh/sp14.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mousse Tiramisu', 
        path_name: 'Mousse_Tiramisu', 
        cost: '35.000 đ', 
        img: require('../../images/banh/sp15.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mousse Gấu Chocolate', 
        path_name: 'Mousse_Gấu_Chocolate', 
        cost: '39.000 đ', 
        img: require('../../images/banh/sp16.jpg'),
        catalog: 'Bánh Ngọt',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Mít Sấy', 
        path_name: 'Mít_Sấy', 
        cost: '20.000 đ', 
        img: require('../../images/banh/sp17.jpg'),
        catalog: 'Snack',
        catalogParent: 'Bánh & Snack', 
        nameCatalog: 'Snack'
    },
    {
        title: 'Gà Xé Lá Chanh', 
        path_name: 'Gà_Xé_Lá_Chanh', 
        cost: '25.000 đ', 
        img: require('../../images/banh/sp18.jpg'),
        catalog: 'Snack',
        catalogParent: 'Bánh & Snack'
    },
    {
        title: 'Chocolate Nóng', 
        path_name: 'Chocolate_Nóng', 
        cost: '55.000 đ', 
        img: require('../../images/difference/sp2.jpg'), 
        catalog:'Chocolate',
        catalogParent: 'Thức uống khác', 
        nameCatalog: 'Chocolate'
    },
    {
        title: 'Chocolate Đá', 
        path_name: 'Chocolate_Đá', 
        cost: '55.000 đ', 
        img: require('../../images/difference/sp1.jpg'), 
        catalog:'Chocolate',
        catalogParent: 'Thức uống khác'
    }
]


const getAllProducts = () => Products

const getProducts = (count) => {
    const max = Products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return Products.slice(start, start + count)
}

const getProductBySlug = (path_name) => Products.find(e => e.path_name === path_name)

const getProductByCatalog = (catalog) => Products.find(e => e.catalog === catalog)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}


const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo, 
    getProductByCatalog
}

export default productData
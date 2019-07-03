import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Product from './component/Product';

class App extends Component {
  render() {
    let products = [
      {
        id : 1,
        images: "https://znews-photo.zadn.vn/w480/Uploaded/sotiuv/2019_06_28/4iphone.jpg",
        title: "iPhone và phận ‘nuôi con tu hú’ của Trung Quốc",
        text: "“Mổ” chiếc iPhone sẽ thấy giá trị mà Trung Quốc nhận được rất thấp so với những công ty tham gia vào quá trình sản xuất. Apple mới là bên hưởng lợi khủng khiếp.",
        status: true,
      },
      {
        id : 2,
        images: "https://znews-photo.zadn.vn/w480/Uploaded/sotiuv/2019_06_28/1ive.jpg",
        title: "Cảm ơn Jony Ive, Apple sẽ tốt hơn khi không có ông",
        text: "Jony Ive đã trở thành biểu tượng cho những thiết kế sáng tạo của Apple. Chia tay một huyền thoại là cơ hội để táo khuyết viết nên trang sử mới.",
        status: false,
      },
      {
        id : 3,
        images: "https://znews-photo.zadn.vn/w480/Uploaded/lce_jwquc/2019_06_24/tech2.jpg",
        title: "Công nghệ Trung Quốc phụ thuộc Mỹ như thế nào",
        text: "Trung Quốc phụ thuộc vào Mỹ trong những công nghệ quan trọng nhất như bán dẫn, hệ điều hành, chip... dù đã tự chủ trong các lĩnh vực liên quan đến tiêu dùng và mạng xã hội.",
        status: false,
      }
    ];

    let elements = products.map((product, index) => {
      let result = '';
      if(product.status === true) {
        return result = <Product 
                  key={index}
                  images={product.images}
                  title={product.title}
                  text={product.text}
                />
      } else {
        return result;
      }
    });
    
    return (
      <React.Fragment>
        <Container>
          <Row>
            {elements}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
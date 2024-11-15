import './App.css';
import Item from './Item';
import Cart from './Cart';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (imgSrc) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.imgSrc === imgSrc);
        if (existingItem) {
          return prevItems.map(item =>
            item.imgSrc === imgSrc
            ? { ...item, count: item.count + 1 }
              : item
          );
        } else {
            return [...prevItems, { imgSrc, count: 1 }];
          }
    });
  };

  const handleRemove = (imgSrc) => {
    setCartItems((prevItems) => {
      return prevItems.map(item =>
        item.imgSrc === imgSrc
          ? { ...item, count: item.count - 1 }
          : item
      ).filter(item => item.count > 0);
    });
  };
  
  const handleRemoveAll = (imgSrc) => {
    setCartItems((prevItems) => {
      return prevItems.map(item =>
        item.imgSrc === imgSrc
          ? { ...item, count: item.count = 0 }
          : item
      ).filter(item => item.count > 0);
    });
  };

  return (
    <>
      <header>
        <div id="header-content">header</div>
      </header>
      
      <main>
        <section>
          <div id="item-title"><h1>그래픽 카드</h1></div>
          <Item 
          itemImg={`${process.env.PUBLIC_URL}/1-img.avif`}
          itemName={"MANLI 지포스 RTX 4060 Nebula D6 8GB Twin 인텍앤컴퍼니"}
          itemDetails={"RTX 4060 4nm 베이스클럭:1830MHz 부스트클럭:2460MHz 스트림 프로세서:3072개 PCIe4.0x16(at x8) GDDR6(DDR6) 출력단자:HDMI2.1,DP1.4 지원정보:8K 지원,4K 지원,HDR 지원,HDCP 2.3 사용전력:115W 전원 포트:8핀 x1 전원부:4+1페이즈 2팬 가로(길이):215mm 두께:42mm 백플레이트"}
          priceText={"409,000"}
          onAddToCart={handleAddToCart} 
          />
          <Item 
          itemImg={`${process.env.PUBLIC_URL}/2-img.avif`}
          itemName={"이엠텍 지포스 RTX 4060 MIRACLE WHITE D6 8GB"}
          itemDetails={"RTX 4060 4nm 베이스클럭:1830MHz 부스트클럭:2460MHz 스트림 프로세서:3072개 PCIe4.0x16(at x8) GDDR6(DDR6) 출력단자:HDMI2.1,DP1.4 지원정보:8K 지원,4K 지원,HDR 지원,HDCP 2.3 사용전력:115W 정격파워 600W 이상 전원 포트:8핀 x1 2팬 가로(길이):252mm 두께:42mm 제로팬(0-dB기술) 백플레이트 LED 라이트 A S 3년"}
          priceText={"450,830"}
          onAddToCart={handleAddToCart}
          />
          <Item 
          itemImg={`${process.env.PUBLIC_URL}/3-img.webp`}
          itemName={"이엠텍 지포스 RTX 4070 Ti SUPER GAMINGPRO D6X 16GB"}
          itemDetails={"RTX 4070 Ti SUPER 4nm 베이스클럭:2340MHz 부스트클럭:2610MHz 스트림 프로세서:8448개 PCIe4.0x16 GDDR6X(DDR6X) 출력단자:HDMI2.1,DP1.4 지원정보:8K 지원,4K 지원,HDR 지원,HDCP 2.3 사용전력:285W 정격파워 750W 이상 전원 포트:16핀(12VHPWR) x1 3팬 가로(길이):328.9mm 두께:63.4mm 제로팬(0-dB기술) 백플레이트 DrMOS LED 라이트 ThunderMaster 구성품:2x8핀 to 16핀 커넥터 A S 3년"}
          priceText={"1,259,000"}
          onAddToCart={handleAddToCart}
          />
          <Item 
          itemImg={`${process.env.PUBLIC_URL}/4-img.avif`}
          itemName={"이엠텍 지포스 RTX 4090 GAMEROCK D6X 24GB"}
          itemDetails={"RTX 4090 4nm 베이스클럭:2235MHz 부스트클럭:2520MHz 스트림 프로세서:16384개 PCIe4.0x16 GDDR6X(DDR6X) 출력단자:HDMI2.1,DP1.4 지원정보:8K 지원,4K 지원,HDR 지원,HDCP 2.3 사용전력:최대 450W 정격파워 1000W 이상 전원 포트:16핀(12VHPWR) x1 전원부:19페이즈 3팬 가로(길이):329.4mm 두께:71.5mm 제로팬(0-dB기술) 백플레이트 DrMOS LED 라이트 Dual BIOS ThunderMaster 구성품:VGA지지대 A S 3년"}
          priceText={"3,314,920"}
          onAddToCart={handleAddToCart}
          />
          <Item 
          itemImg={`${process.env.PUBLIC_URL}/5-img.webp`}
          itemName={"갤럭시 GALAX 지포스 RTX 4060 WHITE OC D6 8GB"}
          itemDetails={"RTX 4060 4nm 베이스클럭:1830MHz 부스트클럭:2475MHz 스트림 프로세서:3072개 PCIe4.0x16(at x8) GDDR6(DDR6) 출력단자:HDMI2.1,DP1.4 지원정보:8K 지원,4K 지원,HDR 지원,HDCP 2.3 사용전력:115W 정격파워 550W 이상 전원 포트:8핀 x1 2팬 가로(길이):237mm 두께:41mm 제로팬(0-dB기술) 백플레이트 XTREME TUNER A S 3년"}
          priceText={"448,000"}
          onAddToCart={handleAddToCart}
          />
          <Item 
          itemImg={`${process.env.PUBLIC_URL}/6-img.webp`}
          itemName={"ZOTAC GAMING 지포스 RTX 4070 SUPER TWIN Edge OC D6X 12GB"}
          itemDetails={"RTX 4070 SUPER 4nm 부스트클럭:2490MHz 스트림 프로세서:7168개 PCIe4.0x16 GDDR6X(DDR6X) 출력단자:HDMI2.1,DP1.4 지원정보:8K 지원,4K 지원,HDR 지원,HDCP 2.3 사용전력:220W 정격파워 650W 이상 전원 포트:16핀(12VHPWR) x1 전원부:7+2페이즈 2팬 가로(길이):234.1mm 두께:40.2mm 제로팬(0-dB기술) 백플레이트 LED 라이트 SPECTRA 구성품:2x8핀 to 16핀 커넥터 A S 3년"}
          priceText={"899,000"}
          onAddToCart={handleAddToCart}
          />
          <Item 
          itemImg={`${process.env.PUBLIC_URL}/7-img.webp`}
          itemName={"갤럭시 BOY 지포스 RTX 4080 SUPER SG OC D6X 16GB"}
          itemDetails={"RTX 4080 SUPER 4nm 베이스클럭:2295MHz 부스트클럭:2610MHz OC클럭:2625MHz 스트림 프로세서:10240개 PCIe4.0x16 GDDR6X(DDR6X) 출력단자:HDMI2.1,DP1.4 지원정보:8K 지원,4K 지원,HDR 지원,HDCP 2.3 사용전력:320W 정격파워 850W 이상 전원 포트:16핀(12VHPWR) x1 3팬 가로(길이):336mm 두께:66mm 제로팬(0-dB기술) 백플레이트 LED 라이트 구성품:VGA지지대,3x8핀 to 16핀 커넥터,클립 온 팬 A S 3년"}
          priceText={"1,819,890"}
          onAddToCart={handleAddToCart}
          />
        </section>

        <aside>
          <div id="cart-title"><h2>장바구니</h2></div>
          <div id="cart-content" >
            {cartItems.map((item, index) => (
              <Cart key={index} 
              cartImg={item.imgSrc} 
              count={item.count}
              remove={handleRemove}
              removeAll={handleRemoveAll}
              />
            ))}
          </div>
        </aside>
      </main>

      <footer>
        <div id="footer-content">footer</div>
      </footer>
    </>
  );
}

export default App;
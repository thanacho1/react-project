import { Container, Card, Col, Row, Button } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function About() {
    return (

        <div className='topic'>
            <Container style={{ padding: 20, marginTop: 20, }}>
             <Carousel interval={5000} autoPlay={true} infiniteLoop={true} animationHandler={"fade"}>
                <div style={{ height: 400 }}>
                    <img src="https://www.metrosystems.co.th/wp-content/CloudService2021/images/3.jpg" alt=""/>
                </div>
                <div style={{ height: 400 }}>
                    <img src="https://www.metrosystems.co.th/wp-content/CloudService2021/images/3.jpg" alt=""/>
                </div>
                <div style={{ height: 400 }}>
                    <img src="https://www.metrosystems.co.th/wp-content/CloudService2021/images/3.jpg" alt="" />
                </div>
            </Carousel>
            <br />
            <Card></Card>
            <br />
            <div style={{ display: "flex" }}>
            <h3 style={{ textAlign: 'center' }}>กลุ่มธุรกิจ</h3>
            <Card style={{ marginLeft: 20, width: 1100, height: 0, marginTop: 20 }}></Card>
            </div>
            <br />
            <h3 style={{ textAlign: 'left', fontSize: 16 }}>บริษัท เมโทรซิสเต็มส์คอร์ปอเรชั่น จำกัด (มหาชน) แบ่งออกเป็น 3 กลุ่มธุรกิจหลัก</h3>
            <br />
            <Row>
            <Col md={4}>
                <Card className="join1" style={{ padding: 10}}>
                <Card.Body>
                    <Card.Img variant="top" src="https://www.metrosystems.co.th/wp-content/uploads/2018/06/Server-Thumbnail-600x244.jpg" width="100" height="200" />
                    <br />
                    <Card.Title style={{ marginTop: 20 }}>Digital Solutions Group (DSG)</Card.Title>
                    <Card></Card>
                    <br />
                    <Card.Text className="textz" style={{ fontSize: 16 }}>จัดจำหน่ายผลิตภัณฑ์ฮาร์ดแวร์ ประกอบด้วยเซิร์ฟเวอร์ สตอเรจ คอมพิวเตอร์ตั้งโต๊ะ โน้ตบุ๊ค เวิร์คสเตชั่น เครื่องพิมพ์ รวมถึงการให้บริการออกแบบและติดตั้งระบบคอมพิวเตอร์ ซอฟต์แวร์และโซลูชั่นต่างๆ อาทิ ระบบค้าปลีก (เครื่อง Point-Of-Sale และซอฟต์แวร์) ระบบ Video Surveillance (IP Camera และซอฟต์แวร์ระบบรักษาความปลอดภัย) รวมถึงโซลูชั่นเพื่อการ กู้คืนระบบ ระบบความปลอดภัย โมบิลิตี้</Card.Text>
                    <Card></Card>
                    <br />
                    <Card.Link href="https://www.metrosystems.co.th/business-units-th/dsg/" target="_blank">
                    <Button variant="warning">Read more</Button>
                    </Card.Link>
                </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="join1" style={{ padding: 10}}>
                <Card.Body>
                    <Card.Img variant="top" src="https://www.metrosystems.co.th/wp-content/uploads/2020/06/OG2OFM0-scaled.jpg" width="100" height="200" />
                    <br />
                    <Card.Title style={{ marginTop: 20 }}>Solutions Integration Group (SIG)</Card.Title>
                    <Card></Card>
                    <br />
                    <Card.Text className="textz" style={{ fontSize: 16 }}>ให้บริการแบบครบวงจรโดยทีมงานมืออาชีพและเชี่ยวชาญ สนับสนุนองค์กรธุรกิจให้ก้าวไปสู่การทำธุรกิจแบบดิจิตอล ด้วยการผสมผสานดิจิตอลเทคโนโลยีที่ทันสมัยเข้าด้วยกันแบบเบ็ดเสร็จเป็นโซลูชั่นและบริการ ช่วยให้ลูกค้าขับเคลื่อนองค์กรได้อย่างมีประสิทธิภาพ ด้วยต้นทุนที่ดีเหมาะสม และธุรกิจเจริญเติบโตแบบยั่งยืน SIG มีเป้าหมายและปรารถนาช่วยองค์กรธุรกิจให้เปลี่ยนผ่านปรับปรุงกระบวนการขั้นตอนกิจกรรมทางธุรกิจต่างๆ</Card.Text>
                    <Card></Card>
                    <br />
                    <Card.Link href="https://www.metrosystems.co.th/business-units-th/sig/" target="_blank">
                    <Button variant="success">Read more</Button>
                    </Card.Link>
                </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="join1" style={{ padding: 10}}>
                <Card.Body>
                    <Card.Img variant="top" src="https://www.metrosystems.co.th/wp-content/uploads/2020/06/HWindex-1-e1593059479471.jpg" width="100" height="200" />
                    <br />
                    <Card.Title style={{ marginTop: 20 }}>Digital Printing Group (DPG)</Card.Title>
                    <Card></Card>
                    <br />
                    <Card.Text className="textz" style={{ fontSize: 16 }}>กลุ่มธุรกิจดิจิตอลพริ้นติ้ง ให้บริการสินค้าเกี่ยวกับงานพิมพ์ในสำนักงานครบวงจร  ไม่ว่าจะเป็นแบบ บริการให้เช่าชื้อ หรือ บริการให้เช่าใช้สำหรับเครื่องพิมพ์  และจัดจำหน่ายในส่วนของวัสดุสิ้นเปลืองสำหรับเครื่องพิมพ์ทุกยี่ห้อ สินค้าไอทีในสำนักงาน รวมทั้งเฟอร์นิเจอร์สำนักงาน ซึ่งตอบโจทย์ลูกค้าทั้งองค์กรเล็กที่ต้องการความคล่องตัวไปจนถึงองค์กรขนาดใหญ่ที่ต้องการประสิทธิภาพสูงสุดในการพิมพ์งานในสำนักงาน</Card.Text>
                    <Card></Card>
                    <br />
                    <Card.Link href="https://www.metrosystems.co.th/business-units-th/dpg/" target="_blank">
                    <Button variant="primary">Read more</Button>
                    </Card.Link>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
      </div>

    )
}
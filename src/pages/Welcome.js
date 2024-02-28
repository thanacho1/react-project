import { Container, Card, Button } from 'react-bootstrap';
import { FiMail, FiHome, FiPhone, FiInbox } from "react-icons/fi";

export default function Welcome() {
    return (
        <div className='phase1'>
            <br />
            <br />
            <Container className= 'con1-welcome' style={{ padding: 20, marginTop: 20 }}>
                <Card.Title style={{ fontSize: 50 }}>Welcome!</Card.Title>
                <br />
                <Card.Text style={{ textAlign: 'justify', fontSize: 20, color: 'white' }}>เราเป็นคู่ค้าที่ได้รับการยอมรับและไว้วางใจว่าเป็นคู่ค้าที่มีคุณค่าทางด้านไอทีในประเทศไทย 
                เรามีสินค้าไม่ว่าจะเป็นทางด้านฮาร์ดแวร์และซอฟท์แวร์ชั้นนำระดับโลก รวมถึงโซลูชันต่าง ๆ “ออกแบบเพื่อตอบสนององค์กรของท่าน” 
                ซึ่งสร้างความพึงพอใจสูงสุดแก่ลูกค้าเสมอมา เราขอขอบคุณลูกค้าทุกคนที่ไว้วางใจเมโทรซิสเต็มส์ และให้เราเป็น “พันธมิตรด้านไอทีของคุณ” 
                ตลอดระยะเวลากว่า 30 ปี แห่งการบริการที่เป็นเลิศและความสำเร็จร่วมกัน</Card.Text>
                <Card.Link href="https://www.metrosystems.co.th/home-careers-th/" target="_blank">
                <Button className='join' variant="primary" style={{fontSize: 20 }}><b>Join us</b></Button>
                <br />
                </Card.Link>
                <br />
                <Card></Card>
                <br /><br /><br />
                <Card.Title style={{ fontSize: 25 }}>MSC Headquarter</Card.Title>
                <Card style={{ marginBottom: 10, marginTop: 5, width: 550}}></Card>
                <Card.Text style={{ textAlign: 'justify', fontSize: 16, color: 'white' }}><FiHome style={{ marginRight: 15}}/>400 Chalermprakiat Rama IX Road , Nong Bon, Prawet, Bangkok 10250</Card.Text>
                <Card.Text style={{ textAlign: 'justify', fontSize: 16, color: 'white' }}><FiPhone style={{ marginRight: 15}}/>(662) 089 - 4000</Card.Text>
                <Card.Text style={{ textAlign: 'justify', fontSize: 16, color: 'white' }}><FiInbox style={{ marginRight: 15}}/>(662) 726 - 2630 - 4</Card.Text>
                <Card.Text style={{ textAlign: 'justify', fontSize: 16, color: 'white' }}><FiMail style={{ marginRight: 15}}/>CRC@metrosystems.co.th</Card.Text>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </Container>
        </div>
    )
}
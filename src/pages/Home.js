import { Container, Card, Button, CardLink } from "react-bootstrap";
import { getCurrentUser } from 'aws-amplify/auth';

export default function Home() {

    const handleButtonClick = async () => {
        try {
            const user = await getCurrentUser();
            
            // ตรวจสอบว่า user มีโครงสร้างที่ต้องการหรือไม่
            if (user && user.signInDetails && user.signInDetails.loginId) {
                const loginId = user.signInDetails.loginId;
    
                let linkToOpen = '';
                if (loginId === 'buddysona.lol@gmail.com') {
                    linkToOpen = 'https://www.google.com';
                } else if (loginId === 'co.thanakrit_st@tni.ac.th') {
                    linkToOpen = 'https://app.powerbi.com/view?r=eyJrIjoiYWI0ZWQ5NmItNjc2My00MDUyLWFlZDktYTljY2U3NDI4NDI3IiwidCI6ImNkMDc4NDljLWVmMmQtNDViZS1hZDJiLTMwNDdkNDgzZjhkMCIsImMiOjEwfQ%3D%3D';
                }
    
                // เปิดลิงก์ในแท็บใหม่
                if (linkToOpen) {
                    window.open(linkToOpen, '_blank');
                }
            } else {
                console.error('ไม่พบข้อมูล User Id หรือ attributes ในผู้ใช้');
            }
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการดึงข้อมูล User Id', error);
        }    
    };
   
      return (
        <div className="con1-home">
            <Container style={{ padding: 20 }}>
            <p style={{ fontSize: 50, background: "black", height: 100, color: "white", padding: 20, textAlign: "center", borderRadius: 10 }}><b>Bill Report</b></p>
            <Card  className="join1" style={{ padding: 20 }}>
            <Card.Body>
            <section className="content-con">
                <div className="content-l">
                    <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww" alt="" />
                </div>
                <div className="content-r">
                    <Card style={{height: 200, padding: 20, width: 840}}>
                        <Card.Title style={{ fontSize: 22}}>BI Report Monthly Bill by MSC</Card.Title>
                        <Card style={{ marginBottom: 10 }}></Card >
                        <Card.Text>รายงานค่าใช้จ่ายของเดือนปัจจุบัน ( แสดงผล 6 เดือน )</Card.Text>
                        <CardLink>
                            <Button className="join1" variant= "dark" style={{fontSize: 12 }} onClick={handleButtonClick}>Click Here</Button>
                        </CardLink>
                    <br />
                    </Card>
                </div>
            </section>
            </Card.Body>
            </Card>

            <br />
            <Card style={{ height: 10 }}></Card>
            <br />

            <p style={{ fontSize: 50, background: "black", height: 100, color: "white", padding: 20, textAlign: "center", borderRadius: 10 }}><b>News & Events</b></p>
            <Card className="join1" style={{ padding: 20 }}>
            <Card.Body>
            <section className="content-con">
                <div className="content-l">
                    <img src="https://www.metrosystems.co.th/wp-content/uploads/2024/02/1500DSC09515-700x441.jpg" alt="" />
                </div>
                <div className="content-r">
                    <Card style={{height: 200, padding: 20, width: 840}}>
                        <Card.Title>MSC ส่งมอบปฏิทินจากโครงการปฏิทินเก่าเราขอ ครั้งที่ 8 ประจำปี 2567</Card.Title>
                        <Card style={{ marginBottom: 10 }}></Card>
                        <Card.Text>21 กุมภาพันธ์ 2024 | CSR-CG-TH, Events TH, News & Events TH, News TH, Thai</Card.Text>
                    <br />
                    <Card.Link href="https://www.metrosystems.co.th/msc-donated-old-desk-calendars-2024-th/" target="_blank">
                    <Button className="join1" variant= "dark" style={{fontSize: 12 }}>Read more</Button>
                    </Card.Link>
                    </Card>
                </div>
            </section>
            </Card.Body>
            </Card>
            <Card className="join1" style={{ padding: 20, marginTop: 10 }}>
            <Card.Body>
            <section className="content-con">
                <div className="content-l">
                    <img src="https://www.metrosystems.co.th/wp-content/uploads/2024/02/DSC04782-2-700x441.jpg" alt="" />
                </div>
                <div className="content-r">
                    <Card style={{height: 200, padding: 20, width: 840}}>
                        <Card.Title>MSC เปิดบ้านต้อนรับนิสิตจากมหาวิทยาลัยมหาสารคาม</Card.Title>
                        <Card style={{ marginBottom: 10 }}></Card>
                        <Card.Text>16 กุมภาพันธ์ 2024 | Events TH, News & Events TH, News TH, Thai</Card.Text>
                    <br />
                    <Card.Link href="https://www.metrosystems.co.th/msc-welcomed-faculties-and-students-from-mahasarakham-university-th/" target="_blank">
                    <Button className="join1" variant= "dark" style={{fontSize: 12, textAlign: "left" }}>Read more</Button>
                    </Card.Link>
                    </Card>
                </div>
            </section>
            </Card.Body>
            </Card>
            </Container>
        </div>

    )
}

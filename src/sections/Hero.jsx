import { useState, useEffect } from "react";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
  {
    id: 1,
    title: "Discord Ticket Bot",
    desc: "ระบบจัดการ Support Ticket อัตโนมัติด้วย Python พร้อมระบบแจ้งชำระเงินและบันทึก Log ",
    detail: "ระบบ Automation สำหรับจัดการคิวสนับสนุนลูกค้าแบบครบวงจร รองรับการสร้างห้องสนทนาส่วนตัวอัตโนมัติ (Private Ticket) , มีระบบ Cooldown 60 วินาทีป้องกันการสแปม , พร้อมเมนูเลือกประเภทคอร์สเรียน และระบบแจ้งชำระเงินผ่าน QR Code ที่เชื่อมโยงข้อมูลกับ Log Channel เพื่อความโปร่งใสในการตรวจสอบ",
    tech: ["Python", "Discord.py", "AsyncIO"],
    img: "img/bot.png"
  },
  {
    id: 2,
    title: "Face Recognition",
    desc: "ระบบตรวจจับและจดจำใบหน้าแบบ Real-time โดยใช้อัลกอริทึม LBPH และ OpenCV ",
    detail: "โปรเจกต์ AI สำหรับระบุตัวตนบุคคลผ่านกล้อง Webcam  โดยใช้หลักการ Image Processing ในการตรวจจับใบหน้าและเปรียบเทียบกับฐานข้อมูลผ่านอัลกอริทึม LBPH ระบบรองรับการสร้าง Dataset ใหม่จากการสแกนใบหน้า 200 รูปเพื่อความแม่นยำ และแสดงผลชื่อพร้อมกรอบสถานะแบบ Real-time ",
    tech: ["OpenCV", "AI / Python", "NumPy"],
    img: "img/face.png"
  }
];

  return (
    <div className="portfolio-container">
      {/* 1. Navigation */}
      <nav className={`nav-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          PHUTAWAN<span style={{ color: "var(--primary-color)" }}>.</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 2. Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="badge">Backend Developer & AI Enthusiast</span>
          <h1>Crafting Digital <br /><span>Solutions with Code.</span></h1>
          <div className="hero-btns">
            <a href="#projects" className="cta-btn">View My Works</a>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-main-wrapper">
            <div className="about-visual">
              <div className="image-frame">
                <img src="img/my.png" alt="Phutawan" />
              </div>
            </div>
            <div className="about-description">
              <p>
                ผมเป็น <strong>Backend Developer</strong> ที่ชื่นชอบการออกแบบระบบหลังบ้านที่มีประสิทธิภาพ 
                ปัจจุบันกำลังเรียน IT ปี 2 และสนุกกับการแก้ปัญหาด้วย <strong>Python</strong> และ <strong>Node.js</strong> 
                เป้าหมายของผมคือการสร้าง API ที่รวดเร็ว และนำเทคโนโลยี <strong>AI</strong> มาช่วยยกระดับซอฟต์แวร์ให้ฉลาดขึ้น
              </p>
              <div className="skills-grid-showcase">
                <div className="skill-item-new">
                  <div className="skill-info"><span>Python & AI</span><span>70%</span></div>
                  <div className="bar"><div className="fill" style={{ width: '70%' }}></div></div>
                </div>
                <div className="skill-item-new">
                  <div className="skill-info"><span>Node.js / Express</span><span>60%</span></div>
                  <div className="bar"><div className="fill" style={{ width: '60%' }}></div></div>
                </div>
                <div className="skill-item-new">
                  <div className="skill-info"><span>SQL Management</span><span>70%</span></div>
                  <div className="bar"><div className="fill" style={{ width: '70%' }}></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <div className="card" key={project.id}>
                <div className="wrapper">
                  <img src={project.img} className="cover-image" alt={project.title} />
                </div>
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <div className="card-overlay">
                    <p>{project.desc}</p>
                    <div className="tags">
                      {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                    <button className="view-btn" onClick={() => setSelectedProject(project)}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">มีโปรเจกต์ที่น่าสนใจ ติดต่อผมได้เลยครับ</p>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>sakayking01@gmail.com</p>
              <a href="mailto:sakayking01@gmail.com" className="contact-link">Send Email</a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🐙</div>
              <h3>GitHub</h3>
              <p>@SuperMeteo</p>
              <a href="https://github.com/SuperMeteo" target="_blank" rel="noreferrer" className="contact-link">View Projects</a>
            </div>
            <div className="contact-card">
  <div className="contact-icon">
    <img src="img/line.png" alt="Line" style={{ width: '45px', height: '45px', }} />
  </div>
  <h3>Line ID</h3>
  <p>ebole_fix</p>
  <a href="https://line.me/ti/p/~ebole_fix" target="_blank" rel="noreferrer" className="contact-link">Add Friend</a>
</div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>082-689-2267</p>
              <a href="tel:0826892267" className="contact-link">Call Me</a>
            </div>
          </div>
          <footer className="footer">
            <p>© 2026 PHUTAWAN. All rights reserved.</p>
          </footer>
        </div>
      </section>

      {/* 6. Modal Section */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedProject(null)}>&times;</button>
            <div className="modal-body">
              <div className="modal-img-container">
                <img src={selectedProject.img} alt={selectedProject.title} />
              </div>
              <div className="modal-text">
                <h2>{selectedProject.title}</h2>
                <div className="tags" style={{ marginBottom: '20px' }}>
                  {selectedProject.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
                <p style={{ color: '#8b949e', lineHeight: '1.8' }}>{selectedProject.detail}</p>
                <div className="modal-footer" style={{ marginTop: '30px' }}>
                  <a href="https://github.com/SuperMeteo" target="_blank" rel="noreferrer" className="cta-btn">
                    View Code on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
import React from 'react';
import './main.scss';
import Footer from '../../components/footer/Footer';
import Experience from '../../components/experience/Experience';
import Work from '../../components/work/Work';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDribbble, faTelegram, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Main() {
    const works = [
        {
            title: 'awwwdde',
            icon: '',
            date: '2022 - present',
            position: 'DevOps',
        },
        {
            title: 'awwwdde',
            icon: '',
            date: '2022 - present',
            position: 'DevOps',
        },
        {
            title: 'awwwdde',
            icon: '',
            date: '2022 - present',
            position: 'DevOps',
        },
        {
            title: 'awwwdde',
            icon: '',
            date: '2022 - present',
            position: 'DevOps',
        },
        // Добавьте больше работ по мере необходимости
    ];

    const experiences = [
        {
            title: 'Frontend',
            image: '',
        },
        {
            title: 'Frontend',
            image: '',
        },
        {
            title: 'Frontend',
            image: '',
        },
        {
            title: 'Frontend',
            image: '',
        },
        {
            title: 'Frontend',
            image: '',
        },
        // Добавьте больше опыта по мере необходимости
    ];

    const contacts = [
        {
            icon: faGithub,
            link: 'https://github.com/yourusername',
        },
        {
            icon: faDribbble,
            link: 'https://dribbble.com/yourusername',
        },
        {
            icon: faTelegram,
            link: 'https://t.me/yourusername',
        },
        {
            icon: faXTwitter,
            link: 'https://www.instagram.com/yourusername/',
        },
        // Добавьте больше контактов по мере необходимости
    ];

    return (
        <div className="main">
            <div className="main-block">
                <div className="main-block__title">TEMPLATE</div>
                <div className="main-block__about">📖 About me
                    <div className="main-block__about-text">Suspendisse quis tincidunt lacus. In hendrerit tristique elit, vitae rhoncus nulla iaculis ac. Pellentesque sodales justo quis sapien tristique feugiat. Integer placerat diam quis tellus vestibulum, ut ultricies mi finibus. Ut congue, lectus vel aliquam pulvinar, neque orci ultrices augue, vel viverra dui arcu id velit. In maximus non felis quis dictum. Nunc convallis vehicula massa scelerisque finibus. Etiam et sollicitudin nunc, sit amet consequat nulla.</div>
                </div>
                <div className="main-block__exp">🔨 My experience
                    <Experience experiences={experiences} />
                </div>
                <div className="main-block__work">🗄 Work
                    <div className="main-block__work-block">
                        <Work works={works} />
                    </div>
                </div>
                <div className="main-block__contact">☎️ Contact
                    <div className="main-block__contact-list">
                        {contacts.map((contact, index) => (
                            <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="main-block__contact-item">
                                <FontAwesomeIcon icon={contact.icon} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            </a>
                        ))}
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Main;
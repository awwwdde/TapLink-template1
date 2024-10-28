import React from 'react';
import './main.scss';
import Footer from '../../components/footer/Footer';
import Experience from '../../components/experience/Experience'; // Импортируем компонент Experience
import Work from '../../components/work/Work';

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
        {
            title: 'awwwdde',
            icon: '',
            date: '2022 - present',
            position: 'DevOps',
        },
    ]
    const experiences = [
        {
            title: 'Frontend',
            image: '', // Замените на URL вашего изображения
        },
        {
            title: 'Backend',
            image: '', // Замените на URL вашего изображения
        },
        {
            title: 'UI UX ',
            image: '', // Замените на URL вашего изображения
        },
        {
            title: 'ThreeJS',
            image: '', // Замените на URL вашего изображения
        },
        {
            title: 'React',
            image: '', // Замените на URL вашего изображения
        },
        // Добавьте больше опыта по мере необходимости
    ];
        const contacts = [
        {
            title: 'GitHub',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', // Иконка GitHub
            link: 'https://github.com/yourusername', // Замените на вашу ссылку
        },
        {
            title: 'LinkedIn',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg', // Иконка LinkedIn
            link: 'https://www.linkedin.com/in/yourusername/', // Замените на вашу ссылку
        },
        {
            title: 'Twitter',
            icon: 'https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_bird_logo_2012.svg', // Иконка Twitter
            link: 'https://twitter.com/yourusername', // Замените на вашу ссылку
        },
        {
            title: 'Facebook',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', // Иконка Facebook
            link: 'https://www.facebook.com/yourusername', // Замените на вашу ссылку
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
                    <Experience experiences={experiences} /> {/* Используем компонент Experience */}
                </div>
                <div className="main-block__work">🗄 Work
                    <div className="main-block__work-block">
                        <Work works={works} /> {/* Используем компонент Work */}
                    </div>
                </div>
                <div className="main-block__contact">☎️ Contact
                    <div className="main-block__contact-list">
                        {contacts.map((contact, index) => (
                            <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" className="main-block__contact-item">
                                <img src={contact.icon} alt={contact.title} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                {contact.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Main;
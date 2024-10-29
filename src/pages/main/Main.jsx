import React from 'react';
import './main.scss';
import Footer from '../../components/footer/Footer';
import Experience from '../../components/experience/Experience'; // Импортируем компонент Experience
import Work from '../../components/work/Work'; // Импортируем компонент Work

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
        // Добавьте больше работ по мере необходимости
    ];

    const experiences = [
        {
            title: 'Frontend',
            image: '', // Замените на URL вашего изображения
        },
        {
            title: 'Frontend',
            image: '', // Замените на URL вашего изображения
        },
        {
            title: 'Frontend',
            image: '', // Замените на URL вашего изображения
        },
        {
            title: 'Frontend',
            image: '', // Замените на URL вашего изображения
        },
        // Добавьте больше опыта по мере необходимости
    ];

    const contacts = [
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', // Иконка GitHub
            link: 'https://github.com/yourusername', // Замените на вашу ссылку
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Dribbble_icon.svg', // Иконка Dribbble
            link: 'https://dribbble.com/yourusername', // Замените на вашу ссылку
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Telegram_logo.svg', // Иконка Telegram
            link: 'https://t.me/yourusername', // Замените на вашу ссылку
        },
        {
            icon: 'https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg', // Иконка LinkedIn (если нужно)
            link: 'https://www.linkedin.com/in/yourusername/', // Замените на вашу ссылку
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
                                <img src={contact.icon} alt="Contact Icon" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
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
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/theme.css'

import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
        name: 'Home',
        path: '/School_9_SKO/',
        component: () => import('./views/Home.vue'),
        meta: { title: { kz: 'Басты бет', ru: 'Главная страница' } }
    },
    {
        name: 'News',
        path: '/News',
        component: () => import('./views/News.vue'),
        meta: { title: { kz: 'Жаңалықтар', ru: 'Новости' } }
    },
    {
        name: 'Virtual reception',
        path: '/Virtual reception',
        component: () => import('./views/Virtual reception.vue'),
        meta: { title: { kz: 'Виртуалды қабылдау', ru: 'Виртуальная приемная' } }
    },
    {
        name: 'Administration',
        path: '/Administration',
        component: () => import('./views/Administration.vue'),
        meta: { title: { kz: 'Әкімшілік', ru: 'Администрация' } }
    },
    {
        name: 'Vacancies',
        path: '/Vacancies',
        component: () => import('./views/Vacancies.vue'),
        meta: { title: { kz: 'Бос жұмыс орындары', ru: 'Вакансии' } }
    },
    {
        name: 'Contacts',
        path: '/Contacts',
        component: () => import('./views/Contacts.vue'),
        meta: { title: { kz: 'Байланыс', ru: 'Контакты' } }
    },
    {
        name: 'Application-to-school',
        path: '/Application-to-school',
        component: () => import('./views/Application-to-school.vue'),
        meta: { title: { kz: 'Мектепке өтінімдер', ru: 'Заявка в школу' } }
    },
    {
        name: 'Zholdau',
        path: '/zholdau',
        component: () => import('./views/pages/zholdau.vue'),
        meta: { title: { kz: 'Жолдау', ru: 'Послание' } }
    },
    {
        name: 'Gosuslugi',
        path: '/gosuslugi',
        component: () => import('./views/pages/Gosuslugi.vue'),
        meta: { title: { kz: 'Мемлекеттік қызмет көрсету', ru: 'Государственные услуги  ' } }
    },
    {
        name: 'Zakupki',
        path: '/zakupki',
        component: () => import('./views/pages/Zakupki.vue'),
        meta: { title: { kz: 'Мемлекеттік сатып алулар', ru: 'Государственные закупки' } }
    },
    {
        name: 'Method',
        path: '/method',
        component: () => import('./views/pages/Method.vue'),
        meta: { title: { kz: 'Әдістемелік жұмыс', ru: 'Методическая работа' } }
    },
    {
        name: 'Norma',
        path: '/norma',
        component: () => import('./views/pages/norma.vue'),
        meta: { title: { kz: 'Нормативтік база ', ru: 'Нормативная база' } }
    },
    {
        name: 'Inclusion',
        path: '/Inclusion',
        component: () => import('./views/pages/Inclusion.vue'),
        meta: { title: { kz: 'Инклюзияны қолдау кабинеті ', ru: 'Кабинет поддержки инклюзии' } }
    },
    {
        name: 'Achievements',
        path: '/achievements',
        component: () => import('./views/pages/achievements.vue'),
        meta: { title: { kz: 'Біздің жетістіктер', ru: 'Наши достижения' } }
    },
    {
        name: 'Attestation',
        path: '/attestation',
        component: () => import('./views/pages/Attestation.vue'),
        meta: { title: { kz: 'Мұғалімдерді аттестаттау', ru: 'Аттестация учителей' } }
    },
    {
        name: 'WhereToStudy',
        path: '/where-to-study',
        component: () => import('./views/pages/WhereToStudy.vue'),
        meta: { title: { kz: 'Кәсіптік бағдар беру жұмысы', ru: 'Профориентационная работа' } }
    },
    {
        name: 'Unt',
        path: '/unt',
        component: () => import('./views/pages/Unt.vue'),
        meta: { title: { kz: 'Ұбт', ru: 'Ент' } }
    },
    {
        name: 'Psychologist',
        path: '/psychologist',
        component: () => import('./views/pages/Psychologist.vue'),
        meta: { title: { kz: 'Психологтың кеңестері', ru: 'Советы психолога' } }
    },
    {
        name: 'Food',
        path: '/food',
        component: () => import('./views/pages/Food.vue'),
        meta: { title: { kz: 'Мектептегі тамақтану', ru: 'Школьное питание' } }
    },
    {
        name: 'Corruption',
        path: '/corruption',
        component: () => import('./views/pages/Corruption.vue'),
        meta: { title: { kz: 'Сыбайлас жемқорлыққа қарсы күрес', ru: 'Противодействие коррупции' } }
    },
    {
        name: 'Center',
        path: '/center',
        component: () => import('./views/pages/center.vue'),
        meta: { title: { kz: 'Шағын орталық', ru: 'Мини-центр' } }
    },
    {
        name: 'Ruh',
        path: '/ruh',
        component: () => import('./views/pages/Ruh.vue'),
        meta: { title: { kz: 'Senimen bolashaq', ru: 'Senimen bolashaq' } }
    },
    {
        name: 'School',
        path: '/school',
        component: () => import('./views/pages/School.vue'),
        meta: { title: { kz: 'Оқуға құштар мектеп', ru: 'Читающая школа' } }
    },
    {
        name: 'Council',
        path: '/council',
        component: () => import('./views/pages/Council.vue'),
        meta: { title: { kz: 'Қамқоршылық кеңесі', ru: 'Попечительский совет' } }
    },
    {
        name: 'WhoProject',
        path: '/who-project',
        component: () => import('./views/pages/WhoProject.vue'),
        meta: { title: { kz: 'ДДҰ жобасы', ru: 'Проект воз' } }
    },
    {
        name: 'Law',
        path: '/law',
        component: () => import('./views/pages/Law.vue'),
        meta: { title: { kz: 'Жасөспірім және заң', ru: 'Подросток и закон  ' } }
    },
    {
        name: 'Ruh',
        path: '/ruh',
        component: () => import('./views/pages/Ruh.vue'),
        meta: { title: { kz: 'Адал ұрпақ', ru: 'Адал ұрпақ' } }
    },
    {
        name: 'Extra',
        path: '/extra',
        component: () => import('./views/pages/Extra.vue'),
        meta: { title: { kz: 'Қосымша білім', ru: 'Дополнительное образование' } }
    },
    {
        name: 'Symvoly',
        path: '/symvoly',
        component: () => import('./views/pages/symvoly.vue'),
        meta: { title: { kz: 'Қазақстан Республикасының мемлекеттік рәміздері', ru: 'Государственные символы ' } }
    },
    {
        name: 'AQ',
        path: '/aq',
        component: () => import('./views/pages/aq.vue'),
        meta: { title: { kz: 'Апқо', ru: 'Цппр' } }
    },
    {
        name: 'Firsy-class-parents',
        path: '/Firsy-class-parents',
        component: () => import('./views/pages/Firsy-class-parents.vue'),
        meta: { title: { kz: 'Бірінші сыныптың ата-аналарға', ru: 'Родителю первоклассника' } }
    },
    {
        name: 'Director-blog',
        path: '/Director-blog',
        component: () => import('./views/Director-blog.vue'),
        meta: { title: { kz: 'Директордың блогы', ru: 'Блог директора' } }
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

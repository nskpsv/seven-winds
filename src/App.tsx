import './App.sass';
import { HeaderPanel, DropDown, NavBar, NavButton, SidePanel, NavList, ContentLayout, Table } from './components/components';
import { homeIcon, arrowBackIcon } from './assets/icons';

function App() {
  const list = [
    'По проекту',
    'Объекты',
    'РД',
    'МТО',
    'СМР',
    'График',
    'МиМ',
    'Рабочие',
    'Капвложения',
    'Бюджет',
    'Финансирование',
    'Панорамы',
    'Камеры',
    'Поручения',
    'Контрагенты',
  ];

  return (
    <>
      <HeaderPanel>
        <NavButton icon={homeIcon} />
        <NavButton icon={arrowBackIcon} />
        <NavBar navList={['Просмотр', 'Управление']} />
      </HeaderPanel>
      <SidePanel>
        <HeaderPanel>
          <DropDown title="Название проекта" caption="Аббревиатура" />
        </HeaderPanel>
        <NavList itemsList={list} />
      </SidePanel>
      <ContentLayout>
        <HeaderPanel title='Строительно-монтажные работы' />
        <Table />
      </ContentLayout>
    </>
  );
}

export default App;

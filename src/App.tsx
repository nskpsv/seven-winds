import './App.sass';
import { homeIcon, arrowBackIcon } from './assets/icons';
import { ContentLayout } from './components/content-layout';
import { DropDown } from './components/drop-down';
import { HeaderPanel } from './components/header-panel';
import { NavBar } from './components/nav-bar';
import { NavButton } from './components/nav-button';
import { NavList } from './components/nav-list';
import { SidePanel } from './components/side-panel';
import { Table } from './components/table';
import { TableProvider } from './context/table-context/table-context';

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
        <HeaderPanel title="Строительно-монтажные работы" />
        <TableProvider>
          <Table />
        </TableProvider>
      </ContentLayout>
    </>
  );
}

export default App;

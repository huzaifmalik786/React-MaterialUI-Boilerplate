// third-party
import { FormattedMessage } from 'react-intl';

// project import
import { useSelector } from 'store';

// assets
import { IconChartArcs, IconClipboardList, IconChartInfographic } from '@tabler/icons';

const icons = {
    widget: IconChartArcs,
    statistics: IconChartArcs,
    data: IconClipboardList,
    chart: IconChartInfographic
};

// ==============================|| MENU ITEMS - API ||============================== //

export const Menu = () => {
    const { menu } = useSelector((state) => state.menu);

    const SubChildrenLis = (subChildrenLis) =>
        subChildrenLis?.map((subList) => ({
            ...subList,
            title: <FormattedMessage id={`${subList.title}`} />,
            icon: icons[subList.icon]
        }));

    const menuItem = (subList) => {
        const list = {
            ...subList,
            title: <FormattedMessage id={`${subList.title}`} />,
            icon: icons[subList.icon]
        };

        if (subList.type === 'collapse') {
            list.children = SubChildrenLis(subList.children);
        }
        return list;
    };

    const withoutMenu = menu?.children?.filter((item) => item.id !== 'no-menu');

    const ChildrenList = withoutMenu?.map((subList) => menuItem(subList));

    const menuList = {
        ...menu,
        title: <FormattedMessage id={`${menu.title}`} />,
        icon: icons[menu.icon],
        children: ChildrenList
    };

    return menuList;
};

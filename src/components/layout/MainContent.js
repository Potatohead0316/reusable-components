import { useState } from 'react'
import './styles.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem, IconButton } from '@mui/material'

const MainContent = () => {

    const initialState = {
        data: {
            'TO DO': [
                { title: 'TD1', value: 'td1', description: 'To do 1 lorem ipsum dolor' },
                { title: 'TD2', value: 'td2', description: 'To do 2' },
                { title: 'TD3', value: 'td3', description: 'To do 3' },
            ],
            'IN PROGRESS': [
                { title: 'IP1', value: 'ip1', description: 'In progress 1' },
                { title: 'IP2', value: 'ip2', description: 'In progress 2' },
            ],
            'DONE': [
                { title: 'D1', value: 'd1', description: 'Done 1' },
                { title: 'D2', value: 'd2', description: 'Done 2' },
                { title: 'D3', value: 'd3', description: 'Done 3' },
                { title: 'D4', value: 'd4', description: 'Done 4' },
            ],
            'DEPLOYED': [
                { title: 'DP1', value: 'dp1', description: 'Deployed 1' },
                { title: 'DP2', value: 'dp2', description: 'Deployed 2' },
            ]
        },
        activeItem: null,
        selectedTab: null,
        selectedItem: null
    }
    const [state, setState] = useState(initialState)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleProceed = (type) => {
        const { selectedTab, selectedItem } = state;
        console.log({ tab: selectedTab, item: selectedItem, type });

        const updatedSourceList = state.data[selectedTab].filter(
            item => item.value !== selectedItem.value
        );

        const updatedTargetList = [...state.data[type], selectedItem];

        const tempData = {
            ...state.data,
            [selectedTab]: updatedSourceList,
            [type]: updatedTargetList
        };

        handleClose(tempData);
    };

    const handleClose = (newData) => {
        setIsDialogOpen(false)

        setTimeout(() => {
            setState(prev => ({
                ...prev,
                activeItem: null,
                selectedTab: null,
                selectedItem: null,
                data: newData || prev.data
            }))
        }, 500)
    }

    const handleMenuOpen = (event, tab, item) => {
        console.log(event.currentTarget)
        console.log(tab)
        console.log(item)
        setState(prev => ({
            ...prev,
            activeItem: event.currentTarget,
            selectedTab: tab,
            selectedItem: item
        }))
        setIsDialogOpen(true)
    }

    console.log('state', state)
    console.log('isDialogOpen', isDialogOpen)

    return (
        <div style={{ padding: '25px' }}>
            <div className='trello-wrapper'>
                {Object.entries(state.data).map(item => {
                    // console.log('item', item)
                    return (
                        <div className='trello-column' key={item}>
                            <div className='trello-tab'>{item[0]}</div>
                            {item[1].map(subItem => {
                                console.log('subItem', subItem)
                                return (
                                    <div className='trello-item' >
                                        <div className='trello-item-head'>
                                            <div className='item-label' >{subItem.title}</div>
                                            <IconButton onClick={(e) => handleMenuOpen(e, item[0], subItem)}>
                                                <MoreHorizIcon />
                                            </IconButton>
                                        </div>
                                        <div className='item-decription'>{subItem.description}</div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <Menu
                anchorEl={state.activeItem}
                open={isDialogOpen}
                onClose={(() => handleClose(''))}
            >
                {Object.entries(state.data).map(([tab]) => {
                    if (tab === state.selectedTab) return null;
                    return (
                        <MenuItem key={tab} onClick={() => { handleProceed(tab) }}>
                            {tab}
                        </MenuItem>
                    )
                }
                )}
            </Menu>
        </div>
    )
}

export default MainContent
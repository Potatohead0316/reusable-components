import { useEffect, useState } from 'react'
import './styles.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, MenuItem, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useGetListQuery, useMoveTaskMutation } from '../../redux/api/taskService';

const MainContent = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useGetListQuery();
    const [moveTask, { isMoveLoading, isError }] = useMoveTaskMutation();
    const initialState = {
        status: ["TO DO", "IN PROGRESS", "QA TESTING", "DONE", "BACKLOG", "DEPLOYED"],
        rowData: {},
        activeItem: null,
        selectedTab: null,
        selectedItem: null
    }
    const [state, setState] = useState(initialState)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    console.log({ data, state })

    useEffect(() => {
        if (data && data.data && Object.keys(data.data).length > 0) {
            setState(prev => ({
                ...prev,
                rowData: data.data || {}
            }));
        } else {
            console.log('error')
        }
    }, [data])

    const handleProceed = async (type, id) => {
        console.log('type', type)

        try {
            const response = await moveTask({ id, status: type }).unwrap();
            console.log('Task moved:', response);
        } catch (err) {
            console.error('Failed to move task:', err);
        }

        handleClose()
    };

    const handleClose = () => {
        setIsDialogOpen(false)

        setTimeout(() => {
            setState(prev => ({
                ...prev,
                activeItem: null,
                selectedTab: null,
                selectedItem: null,
            }))
        }, 500)
    }

    const handleMenuOpen = (event, item) => {
        console.log('selected:',event.currentTarget, {item})
        setState(prev => ({
            ...prev,
            activeItem: event.currentTarget,  
            selectedTab: item.status,
            selectedItem: item
        }));
        setIsDialogOpen(true);
    };


    // console.log({state, data})

    return (
        <div style={{ padding: '25px' }}>
            <div className='trello-wrapper'>
                {state.status.map((item) => {
                    return (
                        <div className='trello-column' key={item}>
                            <div className='trello-tab'>{item}</div>
                            {state.rowData[item]?.map((task, index) => {
                                return (
                                    <div className='trello-item' >
                                        <div className='trello-item-head'>
                                            <div className='item-label' >{task.title}</div>
                                            <IconButton onClick={(e) => handleMenuOpen(e, task)}>
                                                <MoreHorizIcon />
                                            </IconButton>
                                        </div>
                                        <div className='item-decription'>{task.description}</div>
                                    </div>
                                )
                            })}
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <AddIcon style={{ fontSize: '30px', fontWeight: '500' }} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <Menu
                anchorEl={state.activeItem}
                open={isDialogOpen}
                onClose={(() => handleClose())}
            >
                {state.status.map((options, key) => {
                    if (options === state.selectedTab) return null;
                    return (
                        <MenuItem key={key} onClick={() => { handleProceed(options, state.selectedItem?._id) }}>
                            {options}
                        </MenuItem>
                    )
                }
                )}
            </Menu>
        </div>
    )
}

export default MainContent
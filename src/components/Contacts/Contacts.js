import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts, selectorContacts } from 'redux/selector';
import { deleteContact } from 'redux/operation';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Stack,
} from '@mui/material';
import { stringAvatar } from 'helpers/helpers';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const { isLoading } = useSelector(selectorContacts);
  const sortedContacts = contacts.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  return (
    <List>
      {sortedContacts.map(({ id, name, number }) => {
        return (
          <ListItem divider={true} key={id}>
            <ListItemAvatar sx={{ textTransform: 'uppercase' }}>
              {isLoading ? (
                <Skeleton variant="circular" width={40} height={40} />
              ) : (
                <Avatar {...stringAvatar(name)}></Avatar>
              )}
            </ListItemAvatar>

            {isLoading ? (
              <Stack width="70%">
                <Skeleton
                  variant="text"
                  width="70%"
                  sx={{ fontSize: '1rem' }}
                />
                <Skeleton
                  variant="text"
                  width="30%"
                  sx={{ fontSize: '1rem' }}
                />
              </Stack>
            ) : (
              <ListItemText primary={name} secondary={number} />
            )}

            {isLoading ? (
              <Skeleton
                sx={{ ml: 'auto' }}
                variant="circular"
                width={30}
                height={30}
              />
            ) : (
              <IconButton
                aria-label="delete"
                title="delete"
                onClick={() => dispatch(deleteContact(id))}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../styles.css';

const CustomPagination = () => {

  return (
    <div className="pagination">
        <Stack spacing={2}>
            <Pagination
                count={10}
                renderItem={(item) => (
                <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                />
                )}
            />
        </Stack>
    </div>
  );
};

export default CustomPagination;
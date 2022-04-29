// import * as React from "react";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// function PaginationRounded() {
//   return (
//     <Stack spacing={2}>
//       <Pagination count={10} variant="outlined" shape="rounded" />
//     </Stack>
//   );
// }
// export default PaginationRounded;
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
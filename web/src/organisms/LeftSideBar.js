import React from 'react';
import { NavLink } from 'reactstrap';

class LeftCol extends React.Component {
render() {
return (
<div>
	<div className="d-flex flex-column left">

		<div className="p-2">
      <NavLink href="#">Top Question</NavLink>
		</div>

		<div className="p-2">
      <NavLink href="#">Top Users</NavLink>
		</div>

	</div>
</div>
);
}
}
export default LeftCol

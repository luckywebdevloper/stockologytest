import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import {

  RiDashboardFill,

  RiUser3Fill,
} from 'react-icons/ri';
import {DiWebplatform} from "react-icons/di"
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack spacing={'8'} p="16" className=" shadow-lg">
      <LinkButton
        Icon={RiDashboardFill}
        text="Dashboard"
        url={'dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      {/* <LinkButton
        Icon={RiAddCircleFill}
        text="Create Course"
        url={'createcourse'}
        active={location.pathname === '/admin/createcourse'}
      /> */}
      {/* <LinkButton
        Icon={RiEyeFill}
        text="Courses"
        url={'courses'}
        active={location.pathname === '/admin/courses'}
      /> */}
      <LinkButton
        Icon={RiUser3Fill}
        text="Users"
        url={'users'}
        active={location.pathname === '/admin/users'}
      />
       <LinkButton
        Icon={DiWebplatform}
        text="Webinar"
        url={'webinar'}
        active={location.pathname === '/admin/webinar'}
      />
    </VStack>
  );
};

export default Sidebar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'larger'}
        variant="ghost"
        colorScheme={active ? 'purple' : ''}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}

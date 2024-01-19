import { lazy } from "react";
export const MenuEditModal = lazy(
  () => import(/* webpackChunkName: "MenuEditModal'"*/ "./MenuEditModal")
);
export const MessageModal = lazy(
  () => import(/* webpackChunkName: "MessageModal'"*/ "./MessageModal")
);
export const UserEditModal = lazy(
  () => import(/* webpackChunkName: "UserEditModal'"*/ "./UserEditModal")
);
export const OperationRoleModal = lazy(
  () =>
    import(/* webpackChunkName: "OperationRoleModal'"*/ "./OperationRoleModal")
);
export const PlacardEditModal = lazy(
  () => import(/* webpackChunkName: "PlacardEditModal'"*/ "./PlacardEditModal")
);
export const OperationMenuModal = lazy(
  () =>
    import(/* webpackChunkName: "OperationMenuModal'"*/ "./OperationMenuModal")
);
export const OperationLabelModal = lazy(
  () =>
    import(
      /* webpackChunkName: "OperationLabelModal'"*/ "./OperationLabelModal"
    )
);
export const RoleAllocationUserModal = lazy(
  () =>
    import(
      /* webpackChunkName: "RoleAllocationUserModal'"*/ "./RoleAllocationUserModal"
    )
);
export const RoleAllocationMenuModal = lazy(
  () =>
    import(
      /* webpackChunkName: "RoleAllocationMenuModal'"*/ "./RoleAllocationMenuModal"
    )
);
export const MetaDescModal = lazy(
  () => import(/* webpackChunkName: "MetaDescModal'"*/ "./MetaDescModal")
);

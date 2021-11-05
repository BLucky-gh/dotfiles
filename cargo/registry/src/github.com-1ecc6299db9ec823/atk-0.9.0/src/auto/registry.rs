// This file was generated by gir (https://github.com/gtk-rs/gir)
// from gir-files (https://github.com/gtk-rs/gir-files)
// DO NOT EDIT

use atk_sys;
use glib;
use glib::object::IsA;
use glib::translate::*;
use std::fmt;
use ObjectFactory;

glib_wrapper! {
    pub struct Registry(Object<atk_sys::AtkRegistry, atk_sys::AtkRegistryClass, RegistryClass>);

    match fn {
        get_type => || atk_sys::atk_registry_get_type(),
    }
}

pub const NONE_REGISTRY: Option<&Registry> = None;

pub trait RegistryExt: 'static {
    fn get_factory(&self, type_: glib::types::Type) -> Option<ObjectFactory>;

    fn get_factory_type(&self, type_: glib::types::Type) -> glib::types::Type;

    fn set_factory_type(&self, type_: glib::types::Type, factory_type: glib::types::Type);
}

impl<O: IsA<Registry>> RegistryExt for O {
    fn get_factory(&self, type_: glib::types::Type) -> Option<ObjectFactory> {
        unsafe {
            from_glib_none(atk_sys::atk_registry_get_factory(
                self.as_ref().to_glib_none().0,
                type_.to_glib(),
            ))
        }
    }

    fn get_factory_type(&self, type_: glib::types::Type) -> glib::types::Type {
        unsafe {
            from_glib(atk_sys::atk_registry_get_factory_type(
                self.as_ref().to_glib_none().0,
                type_.to_glib(),
            ))
        }
    }

    fn set_factory_type(&self, type_: glib::types::Type, factory_type: glib::types::Type) {
        unsafe {
            atk_sys::atk_registry_set_factory_type(
                self.as_ref().to_glib_none().0,
                type_.to_glib(),
                factory_type.to_glib(),
            );
        }
    }
}

impl fmt::Display for Registry {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Registry")
    }
}

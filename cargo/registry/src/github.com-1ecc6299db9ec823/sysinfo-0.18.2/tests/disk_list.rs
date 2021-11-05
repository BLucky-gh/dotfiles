//
// Sysinfo
//
// Copyright (c) 2017 Guillaume Gomez
//

#[test]
fn test_disks() {
    use sysinfo::SystemExt;

    if sysinfo::System::IS_SUPPORTED {
        let s = sysinfo::System::new_all();
        assert!(!s.get_disks().is_empty());
    }
}

(function() {var implementors = {};
implementors["alloc"] = [{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'a, 'b, B:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, C:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'b, C&gt;&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;C&gt; + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, V:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/btree_map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/btree_map/struct.BTreeMap.html\" title=\"struct alloc::collections::btree_map::BTreeMap\">BTreeMap</a>&lt;K, V&gt;","synthetic":false,"types":["alloc::collections::btree::map::BTreeMap"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/btree_set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree_set::BTreeSet\">BTreeSet</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/btree_set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree_set::BTreeSet\">BTreeSet</a>&lt;T&gt;","synthetic":false,"types":["alloc::collections::btree::set::BTreeSet"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/linked_list/struct.LinkedList.html\" title=\"struct alloc::collections::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/linked_list/struct.LinkedList.html\" title=\"struct alloc::collections::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;","synthetic":false,"types":["alloc::collections::linked_list::LinkedList"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt;","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ [U]&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ mut [U]&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;[U; N]&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ [U; N]&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ mut [U; N]&gt; for <a class=\"struct\" href=\"alloc/collections/vec_deque/struct.VecDeque.html\" title=\"struct alloc::collections::vec_deque::VecDeque\">VecDeque</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::collections::vec_deque::VecDeque"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>&gt; for <a class=\"struct\" href=\"alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>","synthetic":false,"types":["alloc::collections::TryReserveError"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>&gt; for <a class=\"enum\" href=\"alloc/collections/enum.TryReserveErrorKind.html\" title=\"enum alloc::collections::TryReserveErrorKind\">TryReserveErrorKind</a>","synthetic":false,"types":["alloc::collections::TryReserveErrorKind"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;","synthetic":false,"types":["alloc::rc::Rc"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.FromUtf8Error.html\" title=\"struct alloc::string::FromUtf8Error\">FromUtf8Error</a>","synthetic":false,"types":["alloc::string::FromUtf8Error"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;str&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for str","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'a str&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for &amp;'a str","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;str&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, str&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, str&gt;&gt; for str","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'b str&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, str&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, str&gt;&gt; for &amp;'b str","synthetic":false,"types":[]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, str&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, str&gt;&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T&gt;","synthetic":false,"types":["alloc::sync::Arc"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ [U]&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ mut [U]&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for &amp;[T] <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for &amp;mut [T] <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;[U]&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for [T] <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;U, A&gt;&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, [T]&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ [U]&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, [T]&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;T, U&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ mut [U]&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, [T]&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;[U; N]&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]},{"text":"impl&lt;T, U, A:&nbsp;<a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>, const N:&nbsp;usize&gt; <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;&amp;'_ [U; N]&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;U&gt;,&nbsp;</span>","synthetic":false,"types":["alloc::vec::Vec"]}];
implementors["core"] = [];
implementors["proc_macro"] = [{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"proc_macro/struct.LineColumn.html\" title=\"struct proc_macro::LineColumn\">LineColumn</a>&gt; for <a class=\"struct\" href=\"proc_macro/struct.LineColumn.html\" title=\"struct proc_macro::LineColumn\">LineColumn</a>","synthetic":false,"types":["proc_macro::LineColumn"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"proc_macro/struct.SourceFile.html\" title=\"struct proc_macro::SourceFile\">SourceFile</a>&gt; for <a class=\"struct\" href=\"proc_macro/struct.SourceFile.html\" title=\"struct proc_macro::SourceFile\">SourceFile</a>","synthetic":false,"types":["proc_macro::SourceFile"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"proc_macro/enum.Delimiter.html\" title=\"enum proc_macro::Delimiter\">Delimiter</a>&gt; for <a class=\"enum\" href=\"proc_macro/enum.Delimiter.html\" title=\"enum proc_macro::Delimiter\">Delimiter</a>","synthetic":false,"types":["proc_macro::Delimiter"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"proc_macro/enum.Spacing.html\" title=\"enum proc_macro::Spacing\">Spacing</a>&gt; for <a class=\"enum\" href=\"proc_macro/enum.Spacing.html\" title=\"enum proc_macro::Spacing\">Spacing</a>","synthetic":false,"types":["proc_macro::Spacing"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"primitive\" href=\"std/primitive.char.html\">char</a>&gt; for <a class=\"struct\" href=\"proc_macro/struct.Punct.html\" title=\"struct proc_macro::Punct\">Punct</a>","synthetic":false,"types":["proc_macro::Punct"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"proc_macro/struct.Punct.html\" title=\"struct proc_macro::Punct\">Punct</a>&gt; for <a class=\"primitive\" href=\"std/primitive.char.html\">char</a>","synthetic":false,"types":[]}];
implementors["test"] = [{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"test/bench/struct.BenchSamples.html\" title=\"struct test::bench::BenchSamples\">BenchSamples</a>&gt; for <a class=\"struct\" href=\"test/bench/struct.BenchSamples.html\" title=\"struct test::bench::BenchSamples\">BenchSamples</a>","synthetic":false,"types":["test::bench::BenchSamples"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"test/test/struct.Metric.html\" title=\"struct test::test::Metric\">Metric</a>&gt; for <a class=\"struct\" href=\"test/test/struct.Metric.html\" title=\"struct test::test::Metric\">Metric</a>","synthetic":false,"types":["test::helpers::metrics::Metric"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"test/test/struct.MetricMap.html\" title=\"struct test::test::MetricMap\">MetricMap</a>&gt; for <a class=\"struct\" href=\"test/test/struct.MetricMap.html\" title=\"struct test::test::MetricMap\">MetricMap</a>","synthetic":false,"types":["test::helpers::metrics::MetricMap"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"test/test/enum.Concurrent.html\" title=\"enum test::test::Concurrent\">Concurrent</a>&gt; for <a class=\"enum\" href=\"test/test/enum.Concurrent.html\" title=\"enum test::test::Concurrent\">Concurrent</a>","synthetic":false,"types":["test::options::Concurrent"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"test/test/enum.ShouldPanic.html\" title=\"enum test::test::ShouldPanic\">ShouldPanic</a>&gt; for <a class=\"enum\" href=\"test/test/enum.ShouldPanic.html\" title=\"enum test::test::ShouldPanic\">ShouldPanic</a>","synthetic":false,"types":["test::options::ShouldPanic"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"test/enum.OutputFormat.html\" title=\"enum test::OutputFormat\">OutputFormat</a>&gt; for <a class=\"enum\" href=\"test/enum.OutputFormat.html\" title=\"enum test::OutputFormat\">OutputFormat</a>","synthetic":false,"types":["test::options::OutputFormat"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"test/test/enum.RunIgnored.html\" title=\"enum test::test::RunIgnored\">RunIgnored</a>&gt; for <a class=\"enum\" href=\"test/test/enum.RunIgnored.html\" title=\"enum test::test::RunIgnored\">RunIgnored</a>","synthetic":false,"types":["test::options::RunIgnored"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"test/stats/struct.Summary.html\" title=\"struct test::stats::Summary\">Summary</a>&gt; for <a class=\"struct\" href=\"test/stats/struct.Summary.html\" title=\"struct test::stats::Summary\">Summary</a>","synthetic":false,"types":["test::stats::Summary"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"test/test/enum.TestResult.html\" title=\"enum test::test::TestResult\">TestResult</a>&gt; for <a class=\"enum\" href=\"test/test/enum.TestResult.html\" title=\"enum test::test::TestResult\">TestResult</a>","synthetic":false,"types":["test::test_result::TestResult"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"test/test/struct.TestExecTime.html\" title=\"struct test::test::TestExecTime\">TestExecTime</a>&gt; for <a class=\"struct\" href=\"test/test/struct.TestExecTime.html\" title=\"struct test::test::TestExecTime\">TestExecTime</a>","synthetic":false,"types":["test::time::TestExecTime"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"test/test/struct.TestTimeOptions.html\" title=\"struct test::test::TestTimeOptions\">TestTimeOptions</a>&gt; for <a class=\"struct\" href=\"test/test/struct.TestTimeOptions.html\" title=\"struct test::test::TestTimeOptions\">TestTimeOptions</a>","synthetic":false,"types":["test::time::TestTimeOptions"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"test/test/enum.TestType.html\" title=\"enum test::test::TestType\">TestType</a>&gt; for <a class=\"enum\" href=\"test/test/enum.TestType.html\" title=\"enum test::test::TestType\">TestType</a>","synthetic":false,"types":["test::types::TestType"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"test/enum.NamePadding.html\" title=\"enum test::NamePadding\">NamePadding</a>&gt; for <a class=\"enum\" href=\"test/enum.NamePadding.html\" title=\"enum test::NamePadding\">NamePadding</a>","synthetic":false,"types":["test::types::NamePadding"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"enum\" href=\"test/test/enum.TestName.html\" title=\"enum test::test::TestName\">TestName</a>&gt; for <a class=\"enum\" href=\"test/test/enum.TestName.html\" title=\"enum test::test::TestName\">TestName</a>","synthetic":false,"types":["test::types::TestName"]},{"text":"impl <a class=\"trait\" href=\"core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&lt;<a class=\"struct\" href=\"test/test/struct.TestId.html\" title=\"struct test::test::TestId\">TestId</a>&gt; for <a class=\"struct\" href=\"test/test/struct.TestId.html\" title=\"struct test::test::TestId\">TestId</a>","synthetic":false,"types":["test::types::TestId"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
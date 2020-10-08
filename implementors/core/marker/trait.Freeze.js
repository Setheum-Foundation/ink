(function() {var implementors = {};
implementors["ink_env"] = [{"text":"impl Freeze for ReturnFlags","synthetic":true,"types":[]},{"text":"impl Freeze for AccountId","synthetic":true,"types":[]},{"text":"impl Freeze for Hash","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultEnvironment","synthetic":true,"types":[]},{"text":"impl&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; Freeze for CallBuilder&lt;E, Callee, GasLimit, TransferredValue, Args, RetType&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Callee: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;RetType: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;TransferredValue: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; Freeze for CallParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; Freeze for CreateBuilder&lt;E, CodeHash, GasLimit, Endowment, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;CodeHash: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Endowment: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;GasLimit: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E, Args, R&gt; Freeze for CreateParams&lt;E, Args, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as Environment&gt;::Hash: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Args&gt; Freeze for ExecutionInput&lt;Args&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Args: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Selector","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ReturnType&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Set&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Unset&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Head, Rest&gt; Freeze for ArgumentList&lt;Head, Rest&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Head: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rest: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Argument&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for ArgumentListEnd","synthetic":true,"types":[]},{"text":"impl Freeze for CallData","synthetic":true,"types":[]},{"text":"impl Freeze for ChainSpec","synthetic":true,"types":[]},{"text":"impl Freeze for EmittedEvent","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for DefaultAccounts&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Environment&gt;::AccountId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Sha2x256","synthetic":true,"types":[]},{"text":"impl Freeze for Keccak256","synthetic":true,"types":[]},{"text":"impl Freeze for Blake2x256","synthetic":true,"types":[]},{"text":"impl Freeze for Blake2x128","synthetic":true,"types":[]}];
implementors["ink_lang"] = [{"text":"impl&lt;'a, T&gt; Freeze for EnvAccess&lt;'a, T&gt;","synthetic":true,"types":[]}];
implementors["ink_lang_ir"] = [{"text":"impl&lt;'a, C&gt; Freeze for CallableWithSelector&lt;'a, C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Config","synthetic":true,"types":[]},{"text":"impl Freeze for Constructor","synthetic":true,"types":[]},{"text":"impl Freeze for Contract","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for InkTest","synthetic":true,"types":[]},{"text":"impl Freeze for InkTrait","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for InkTraitConstructor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for InkTraitMessage&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for InputsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for ItemImpl","synthetic":true,"types":[]},{"text":"impl Freeze for ItemMod","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for IterConstructors&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for IterEvents&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for IterInkTraitItems&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for IterItemImpls&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for IterMessages&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Message","synthetic":true,"types":[]},{"text":"impl Freeze for Namespace","synthetic":true,"types":[]},{"text":"impl Freeze for Selector","synthetic":true,"types":[]},{"text":"impl Freeze for Storage","synthetic":true,"types":[]},{"text":"impl Freeze for CallableKind","synthetic":true,"types":[]},{"text":"impl Freeze for ImplItem","synthetic":true,"types":[]},{"text":"impl Freeze for InkItem","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for InkTraitItem&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Item","synthetic":true,"types":[]},{"text":"impl Freeze for Receiver","synthetic":true,"types":[]},{"text":"impl Freeze for Visibility","synthetic":true,"types":[]}];
implementors["ink_metadata"] = [{"text":"impl&lt;F&gt; Freeze for ConstructorSpec&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Selector&gt; Freeze for ConstructorSpecBuilder&lt;Selector&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for ContractSpec&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for ContractSpecBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for EventParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for EventParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for EventSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for EventSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for MessageParamSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for MessageParamSpecBuilder","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for MessageSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Selector, Mutates, IsPayable, Returns&gt; Freeze for MessageSpecBuilder&lt;Selector, Mutates, IsPayable, Returns&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for ReturnTypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Selector","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for TypeSpec&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for InkProject","synthetic":true,"types":[]},{"text":"impl Freeze for LayoutKey","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for CellLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for HashLayout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for HashingStrategy","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for ArrayLayout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for StructLayout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for FieldLayout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::String: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for Discriminant","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for EnumLayout&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Freeze for Layout&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;F as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for CryptoHasher","synthetic":true,"types":[]}];
implementors["ink_primitives"] = [{"text":"impl Freeze for Key","synthetic":true,"types":[]},{"text":"impl Freeze for KeyPtr","synthetic":true,"types":[]}];
implementors["ink_storage"] = [{"text":"impl&lt;T&gt; !Freeze for Box&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Freeze for Vec&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Freeze for Lazy&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Memory&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pack&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for DynamicAllocation","synthetic":true,"types":[]},{"text":"impl Freeze for ContractPhase","synthetic":true,"types":[]},{"text":"impl !Freeze for BitStash","synthetic":true,"types":[]},{"text":"impl !Freeze for Bitvec","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&nbsp;=&nbsp;Blake2x256&gt; !Freeze for HashMap&lt;K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; !Freeze for SmallVec&lt;T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Freeze for Stash&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BitRefMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ChunkRef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BitsIter&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for BitsIterMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; Freeze for Iter&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; Freeze for IterMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K&gt; Freeze for Keys&lt;'a, K&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; Freeze for Values&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V, H&gt; Freeze for ValuesMut&lt;'a, K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Freeze for OccupiedEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Freeze for VacantEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Freeze for Entry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; Freeze for Iter&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, N&gt; Freeze for IterMut&lt;'a, T, N&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for VacantEntry","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Entry&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for IndexOutOfBounds","synthetic":true,"types":[]},{"text":"impl&lt;T, N&gt; Freeze for LazyArray&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;N as ArrayLength&lt;CacheCell&lt;Option&lt;StorageEntry&lt;T&gt;&gt;&gt;&gt;&gt;::ArrayType: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; !Freeze for LazyCell&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;V&gt; !Freeze for LazyIndexMap&lt;V&gt;","synthetic":true,"types":[]},{"text":"impl&lt;K, V, H&gt; !Freeze for LazyHashMap&lt;K, V, H&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Freeze for OccupiedEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Freeze for VacantEntry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, V&gt; Freeze for Entry&lt;'a, K, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["scale_info"] = [{"text":"impl Freeze for MetaType","synthetic":true,"types":[]},{"text":"impl Freeze for Registry","synthetic":true,"types":[]},{"text":"impl Freeze for RegistryReadOnly","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TypeDefComposite&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Field&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Path&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TypeDefVariant&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Variant&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::String: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Type&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TypeDefArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TypeDefTuple&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TypeDefSequence&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for PathError","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TypeDef&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Form&gt;::Type: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for TypeDefPrimitive","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; Freeze for TypeBuilder&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for FieldsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for VariantsBuilder&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for NoFields","synthetic":true,"types":[]},{"text":"impl Freeze for NamedFields","synthetic":true,"types":[]},{"text":"impl Freeze for UnnamedFields","synthetic":true,"types":[]},{"text":"impl Freeze for Fields","synthetic":true,"types":[]},{"text":"impl Freeze for NoVariants","synthetic":true,"types":[]},{"text":"impl Freeze for VariantFields","synthetic":true,"types":[]},{"text":"impl Freeze for Fieldless","synthetic":true,"types":[]},{"text":"impl Freeze for Variants","synthetic":true,"types":[]},{"text":"impl Freeze for PathNotAssigned","synthetic":true,"types":[]},{"text":"impl Freeze for PathAssigned","synthetic":true,"types":[]},{"text":"impl Freeze for MetaForm","synthetic":true,"types":[]},{"text":"impl Freeze for CompactForm","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for UntrackedSymbol&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; Freeze for Symbol&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Interner&lt;T&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
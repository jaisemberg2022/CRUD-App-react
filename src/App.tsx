import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import FormCrud from './components/ui/FormCrud';
import UserItem from './components/ui/UserItem';
import { baseUrl, generateId } from './lib/utils';
import { useApi } from './hooks/useApi';
import { formSchema } from './lib/schemas';
import { LinksPages } from './components/ui/LinkPages';

type FormData = z.infer<typeof formSchema>;

interface User extends FormData {
	id: number;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [isEdited, setIsEdited] = useState<null | number>(null);
	const { request } = useApi<User[]>();

	useEffect(() => {
		axios.get(baseUrl).then((res) => setUsers(res.data));
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			birthday: '',
			img_url: '',
		},
	});

	const onSubmit = (dataForm: FormData): void => {
		if (isEdited) {
			updateUser(dataForm, isEdited);
		} else {
			createUser(dataForm);
		}
		reset({ name: '', email: '', password: '', birthday: '', img_url: '' });
	};

	const createUser = async (dataForm: FormData): Promise<void> => {
		const newUser: User = { id: generateId(users), ...dataForm };
		await request({
			method: 'POST',
			url: baseUrl,
			data: newUser,
		});

		setUsers((prevUsers) => [...prevUsers, newUser]);
	};

	const deleteUser = async (id: number): Promise<void> => {
		await request({
			method: 'DELETE',
			url: `${baseUrl}/${id}`,
		});

		setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
	};

	const onEdit = (user: User): void => {
		reset(user);
		setIsEdited(user.id);
	};

	const updateUser = async (dataForm: FormData, id: number): Promise<void> => {
		const updatedUser: User = { id, ...dataForm };
		await request({
			method: 'PUT',
			url: `${baseUrl}/${id}`,
			data: updatedUser,
		});

		setUsers((prevUsers) =>
			prevUsers.map((u) => (u.id === id ? updatedUser : u)),
		);
		setIsEdited(null);
	};

	const onCancel = () => {
		reset({ name: '', email: '', password: '', birthday: '', img_url: '' });
		setIsEdited(null);
	};

	return (
<div className="flex justify-center px-4 py-2 bg-gray-300 min-h-dvh">
	<div className="flex flex-row w-full max-w-6xl gap-10 items-start">
		<div className="w-1/2">
			<h2 className="text-2xl font-semibold mb-4 mx-auto w-fit">
				Formulario
			</h2>
			<FormCrud
				OnSubmmit={handleSubmit(onSubmit)}
				OnClickButton={onCancel}
				Register={register}
				errors={errors}
				isEdited={isEdited}
			/>
		</div>

		<div className="w-1/2">
			<h2 className="text-2xl font-semibold mb-4 mx-auto w-fit">
				Usuarios
			</h2>

			<div className="h-[80vh] overflow-y-auto pr-2">
				<div className="grid gap-4">
					{users &&
						users.map((user) => (
							<UserItem
								key={user.id}
								user={user}
								OnDelete={(id) => deleteUser(id)}
								OnEdit={onEdit}
							/>
						))}
				</div>
			</div>
		</div>
	</div>
	<LinksPages />
</div>

	);
}

export default App;

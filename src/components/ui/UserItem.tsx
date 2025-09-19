import { Button } from '../../components/ui/button';
import type { UserItemProps } from '../../interfaces/global';

const UserItem = ({ user, OnEdit, OnDelete }: UserItemProps) => {
	return (
		<div className="border p-3 rounded text-sm bg-white">
			<div className="flex justify-between items-center mb-2">
				<p className="font-medium text-left w-1/2">
					<strong>Nombre:</strong>
				</p>
				<p className="text-right w-1/2">{user.name}</p>
			</div>
			<hr className="border-gray-200 my-1" />

			<div className="flex justify-between items-center mb-2">
				<p className="font-medium text-left w-1/2">
					<strong>Email:</strong>
				</p>
				<p className="text-right w-1/2">{user.email}</p>
			</div>
			<hr className="border-gray-200 my-1" />

			<div className="flex justify-between items-center mb-2">
				<p className="font-medium text-left w-1/2">
					<strong>Contraseña:</strong>
				</p>
				<p className="text-right w-1/2">{user.password}</p>
			</div>
			<hr className="border-gray-200 my-1" />

			<div className="flex justify-between items-center mb-2">
				<p className="font-medium text-left w-1/2">
					<strong>Fecha de nacimiento:</strong>
				</p>
				<p className="text-right w-1/2">{user.birthday}</p>
			</div>
			<hr className="border-gray-200 my-1" />

			{user.img_url && (
				<div className="flex justify-center mt-2">
					<img
						src={user.img_url}
						alt={user.name}
						className="w-16 h-16 object-cover rounded"
					/>
				</div>
			)}

			<div className="mt-3 flex justify-end gap-2">
				<Button variant="destructive" onClick={() => OnDelete(user.id)}>
					Eliminar
				</Button>
				<Button variant="default" onClick={() => OnEdit(user)}>
					Editar
				</Button>
			</div>
		</div>
	);
};

export default UserItem;

import { Label } from '@radix-ui/react-label';
import { cn } from '../../lib/utils';
import { Button } from './button';
import { Input } from './input';
import type { FormCrudProps } from '../../interfaces/global';

const FormCrud = (props: FormCrudProps) => {
	const {
		OnClickButton,
		OnSubmmit,
		Register,
		errors,
		isEdited,
	} = props;
	return (
		<form
			onSubmit={OnSubmmit}
			className="max-w-sm mx-auto p-4 border border-gray-300 rounded bg-white h-[80vh]"
		>
			<div className="flex flex-col gap-1 mb-4">
				<Label htmlFor="name">Nombre</Label>
				<Input id="name" {...Register('name')}  placeholder='ingresa tu nombre'/>
				{errors.name && (
					<p className="text-red-500 text-xs mt-1">{`${errors.name?.message}`}</p>
				)}
			</div>

			<div className="flex flex-col gap-1 mb-4">
				<Label htmlFor="email">Email</Label>
				<Input id="email" type="email" {...Register('email')} placeholder='ingresa un email valido'/>
				{errors.email && (
					<p className="text-red-500 text-xs mt-1">{`${errors.email.message}`}</p>
				)}
			</div>

			<div className="flex flex-col gap-1 mb-4">
				<Label htmlFor="password">Contraseña</Label>
				<Input id="password" type="password" {...Register('password')} placeholder='ingresa una contraseña'/>
				{errors.password && (
					<p className="text-red-500 text-xs mt-1">{`${errors.password.message}`}</p>
				)}
			</div>

			<div className="flex flex-col gap-1 mb-4">
				<Label htmlFor="birthday">Fecha de nacimiento</Label>
				<Input id="birthday" type="date" {...Register('birthday')} placeholder='registra tu fecha de nacimiento' />
				{errors.birthday && (
					<p className="text-red-500 text-xs mt-1">{`${errors.birthday.message}`}</p>
				)}
			</div>

			<div className="flex flex-col gap-1 mb-4">
				<Label htmlFor="imag_url">Image</Label>
				<Input id="imag_url" {...Register('img_url')} />
				{errors.img_url && (
					<p className="text-red-500 text-xs mt-1">{`${errors.img_url.message}`}</p>
				)}
			</div>

			<Button
				variant="outline"
				type="submit"
				className={cn(
					'text-white bg-blue-500 hover:bg-blue-600 hover:text-white',
					isEdited &&
						'bg-amber-400 text-black hover:bg-amber-500 hover:text-black',
				)}
			>
				{isEdited ? 'Update User' : 'Create User'}
			</Button>

			{isEdited && (
				<Button
					variant="ghost"
					type="button"
					className="ml-2"
					onClick={OnClickButton}
				>
					Cancel
				</Button>
			)}
		</form>
	);
};

export default FormCrud;

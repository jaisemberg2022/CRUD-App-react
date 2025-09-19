import type { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface FormCrudProps {
	OnClickButton: () => void;
	OnSubmmit: () => void;
	Register: UseFormRegister<any>;
	errors: FieldErrors<any>;
	isEdited: number | null;
}

export interface UserItemProps{
    user: any, 
    OnDelete: (id: number) => void; 
    OnEdit: (user:any) => void;
} 



import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { products } from '../../../data/products';
import { formatCurrency } from '../../../utils/formatCurrency';

export const ProductList: React.FC = () => {
	return (
		<div className="bg-white rounded-lg shadow overflow-hidden">
			<div className="overflow-x-auto">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-[#F5ECD5]">
						<tr>
							<th className="px-6 py-3 text-left text-xs font-medium text-[#3D3D3D] uppercase tracking-wider">
								Product
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-[#3D3D3D] uppercase tracking-wider">
								Price
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-[#3D3D3D] uppercase tracking-wider">
								Stock
							</th>
							<th className="px-6 py-3 text-left text-xs font-medium text-[#3D3D3D] uppercase tracking-wider">
								Category
							</th>
							<th className="px-6 py-3 text-right text-xs font-medium text-[#3D3D3D] uppercase tracking-wider">
								Actions
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{products.map((product) => (
							<tr key={product.id} className="hover:bg-gray-50">
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="flex items-center">
										<img
											className="h-10 w-10 rounded-lg object-cover"
											src={product.image}
											alt={product.name}
										/>
										<div className="ml-4">
											<div className="text-sm font-medium text-[#3D3D3D]">
												{product.name}
											</div>
										</div>
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-[#3D3D3D]">
										{formatCurrency(product.price)}
									</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<div className="text-sm text-[#3D3D3D]">{product.stock}</div>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#A76D6D]/10 text-[#A76D6D]">
										{product.category}
									</span>
								</td>
								<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
									<button className="text-[#A76D6D] hover:text-[#8B4513] mr-3">
										<Edit2 className="w-4 h-4" />
									</button>
									<button className="text-red-600 hover:text-red-900">
										<Trash2 className="w-4 h-4" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
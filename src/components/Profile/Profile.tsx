import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';

import * as S from './profile.styled';
import { ServiceResponseDto } from "../../utils/Products/Service/service.types";
import { ServiceAdapter } from "../../adapters/Products/Service/Service";
import { EstablishmentResponseDto } from "../../utils/Establishment/establishment.types";

const Profile: React.FC<S.ProfileProps> = ({profile, tipoperfil, username}) => {
        const [servicesInfo, setServicesInfo] = useState<ServiceResponseDto[] | null>(null);
        const serviceAdapter = new ServiceAdapter;

        // Buscando dados nos cookies
        const CookieEstablishmentData = Cookies.get('establishmentInfo');

        // Convertendo para JSON
        const establishmentData = CookieEstablishmentData ? JSON.parse(CookieEstablishmentData) as EstablishmentResponseDto : null;

        // LOAD DE DADOS DA PÁGINA =======================
        useEffect(() => {
                if (establishmentData) {
                const fetchEstablishmentData = async () => {

                const serviceData = await serviceAdapter.getServicesByEstablishmentId(Number(establishmentData.id));
                setServicesInfo(serviceData);
                };
                fetchEstablishmentData();
                }
        }, [CookieEstablishmentData]);

return (
<S.ContainerProfile direction="row">
        <S.ContainerProfileImg profile={profile} tipoperfil={tipoperfil}  />
        <S.ContainerProfileInfo>
                <h1>{username}</h1>
                {tipoperfil == "B2B"?(
                        
                        <S.ContainerTags>
                                {servicesInfo && (
                                        Array.isArray(servicesInfo)
                                        ? servicesInfo.slice(0, 2).map((service: ServiceResponseDto, index: number) => (
                                                <S.TagsProfile key={index}>{service.specification}</S.TagsProfile>
                                        ))
                                        : null  
                                )}
                        </S.ContainerTags>
                        ) : null
                }
        </S.ContainerProfileInfo>
</S.ContainerProfile>
)
};

export default Profile;
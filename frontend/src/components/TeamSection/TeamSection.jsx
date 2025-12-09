import React, { useState, useEffect } from 'react'
import style from './TeamSection.module.css'
import { getTeamMembers, getTeamSectionConfig } from '../../notion/teamService'

const TeamSection = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sectionConfig, setSectionConfig] = useState({
        sectionTitle: "Meet the Team",
        sectionDescription: "Get to know the passionate individuals driving innovation and education at Techten Planet."
    });

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                setLoading(true);
                
                // Fetch team members and section config
                const [members, config] = await Promise.all([
                    getTeamMembers(),
                    Promise.resolve(getTeamSectionConfig())
                ]);
                
                setTeamMembers(members);
                setSectionConfig(config);
                setError(null);
            } catch (err) {
                console.error('Error fetching team data:', err);
                setError('Failed to load team members. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTeamData();
    }, []);

    if (loading) {
        return (
            <div className={style.teamSection}>
                <div className={style.loading}>
                    <h2 className={style.sectionTitle}>Meet the Team</h2>
                    <p>Loading team members...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={style.teamSection}>
                <div className={style.error}>
                    <h2 className={style.sectionTitle}>Meet the Team</h2>
                    <p className={style.errorMessage}>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className={style.teamSection}>
            <h2 className={style.sectionTitle}>{sectionConfig.sectionTitle}</h2>
            {sectionConfig.sectionDescription && (
                <p className={style.sectionDescription}>{sectionConfig.sectionDescription}</p>
            )}
            <div className={style.teamGrid}>
                {teamMembers.map(member => (
                    <div key={member.id} className={style.teamCard}>
                        <div className={style.imageContainer}>
                            <img 
                                src={member.image} 
                                alt={member.name}
                                loading="lazy"
                            />
                        </div>
                        <div className={style.cardContent}>
                            <h3 className={style.memberName}>{member.name}</h3>
                            <p className={style.memberRole}>{member.role}</p>
                            {member.quote && (
                                <p className={style.memberQuote}>"{member.quote}"</p>
                            )}
                            {member.bio && (
                                <p className={style.memberBio}>{member.bio}</p>
                            )}
                            {member.specialties && member.specialties.length > 0 && (
                                <div className={style.specialties}>
                                    {member.specialties.map((specialty, index) => (
                                        <span key={index} className={style.specialtyTag}>
                                            {specialty}
                                        </span>
                                    ))}
                                </div>
                            )}
                            {(member.linkedin || member.email) && (
                                <div className={style.contactLinks}>
                                    {member.linkedin && (
                                        <a 
                                            href={member.linkedin} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={style.contactLink}
                                            aria-label={`${member.name}'s LinkedIn profile`}
                                        >
                                            LinkedIn
                                        </a>
                                    )}
                                    {member.email && (
                                        <a 
                                            href={`mailto:${member.email}`}
                                            className={style.contactLink}
                                            aria-label={`Email ${member.name}`}
                                        >
                                            Email
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamSection
